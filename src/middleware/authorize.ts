//import { Request, Response, NextFunction } from 'express';

const jwt = require('express-jwt');
require('dotenv').config();
import { Menus } from "../entity/Menu";
import { rolePermissions } from "../entity/rolePermissions";

module.exports = authorize

function authorize(accessItem: any, operation: any) {
    const accessToken = process.env.ACCESS_TOKEN_SECRET;

    if (!accessToken) {
        throw new Error('JWT secret is not defined. Make sure it is set in the environment.');
    }
    return [
        // authenticate JWT token and attach decoded token to request as req.user
        jwt({ secret: accessToken, algorithms: ['HS256'] }),

        (err: any, req: any, res: any, next: any) => {
            if (err) {
                console.log(req);
                if (err.name === 'UnauthorizedError' && err.code === 'invalid_token') {
                    return res.status(401).json({ message: 'Token has expired' });
                }
                return res.status(401).json({ message: 'Unauthorized' });
            }
            next(err);
        },

        async (req: any, res: any, next: any) => {
            // check user still exists
            const userDetail = req.user?.userInfo?.empTypeId;

            const user = await rolePermissions.find({ roleId: userDetail });
            const menuId = await Menus.findOne({ Description: accessItem });
            const access = user.filter((item) => item.menuId === menuId.MenuId.toString())[0];
            console.log("ACCESS", userDetail);
            if (!user) {
                return res.status(401).json({ message: 'Unauthorized' });
            }
            if (userDetail == 3 || access?.access_all) {
                next();
                return;
            }
            if ((userDetail === 3 || !access?.access_all) && (operation === "read" && !access?.read) ||
                (operation === "create" && !access?.create) ||
                (operation === "update" && !access?.update) ||
                (operation === "delete" && !access?.delete)) {
                return res.status(401).json({ message: "User is not authorized to access this operation" });
            }
            next();
        }
    ];
}