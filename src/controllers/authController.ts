import { Request, Response } from "express";
import { InternalServerError } from "../response/InternalServerErrorResponse";
import { Employee } from "../entity/Employee";

//const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

export const loginUser = async (req: Request, res: Response) => {
    try {
        const { userName, password } = req.body;
        console.log(res);

        if (!userName || !password) return res.status(400).json({ message: 'Both username and password are required' });

        const foundMatch = await Employee.findOne({ userName });
        //const foundMatch = username == "Alex";
        //const passwordCheck = await bcrypt.compare(password, foundMatch.password);
        const username = foundMatch?.userName == userName;
        const passwordCheck = foundMatch?.password == password;

        if (!foundMatch || !username) return res.status(401).json({ message: 'Username not found' });
        if (!passwordCheck) return res.status(401).json({ message: "Username and password doesn't match" });

        const { empId, designation, empTypeId,branchId } = foundMatch;

        const accessToken = jwt.sign(
            {
                "userInfo": {
                    "username": username,
                    "designation": foundMatch.designation,
                    "empId": foundMatch.empId,
                    "empTypeId": foundMatch.empTypeId,
                    "branchId": foundMatch.branchId,
                }
            },
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: '60m' }
        )

        const refreshToken = jwt.sign(
            {
                "username": foundMatch.userName,
                "designation": foundMatch.designation,
                "empId": foundMatch.empId,
                "empTypeId": foundMatch.empTypeId,
                "branchId": foundMatch.branchId
            },
            process.env.REFRESH_TOKEN_SECRET,
            { expiresIn: '7d' }
        )

        res.cookie('jwt', refreshToken, {
            httpOnly: true,
            secure: true,
            sameSite: 'none',
            path: '/',
            maxAge: 7 * 24 * 60 * 60 * 1000
        })

        res.json({ accessToken, designation, empId, empTypeId,branchId })

    } catch (error) {
        return InternalServerError(res, error);
    }
};


export const refresh = async (req: Request, res: Response) => {
    try {
        const cookies = req.cookies;
        if (!cookies?.jwt) return res.status(401).json({ message: 'Unauthorized' });

        const refreshToken = cookies.jwt;
        console.log("REFRESH", refreshToken);
        jwt.verify(
            refreshToken,
            process.env.REFRESH_TOKEN_SECRET as string,
            async (error: Error | null, decoded: { username: string, designation: string, empId: string, empTypeId: string, branchId: string }) => {
                if (error) {
                    return res.status(401).json({ message: 'Unauthorized' });
                }

                try {
                    const foundUser = { username: decoded.username, designation: decoded.designation, empId: decoded.empId, empTypeId: decoded.empTypeId, branchId: decoded.branchId }; //await User.findOne({ username: decoded.username }).exec();

                    if (!foundUser) return res.status(401).json({ message: 'Unauthorized' });

                    const accessToken = jwt.sign(
                        {
                            userInfo: {
                                username: foundUser.username,
                                role: foundUser.designation,
                                empId: foundUser.empId,
                                empTypeId: foundUser.empTypeId,
                                branchId: foundUser.branchId
                            }
                        },
                        process.env.ACCESS_TOKEN_SECRET,
                        { expiresIn: '30m' }
                    );
                    console.log(decoded);
                    res.json({ accessToken: accessToken, username: foundUser.username, designation: foundUser.designation, empId: foundUser.empId, empTypeId: foundUser.empTypeId, branchId: foundUser.branchId });
                } catch (error) {
                    return InternalServerError(res, error);
                }
            }
        );
    } catch (error) {
        return InternalServerError(res, error);
    }
};

export const logout = async (req: Request, res: Response) => {
    try {
        const cookies = req.cookies;
        console.log("Cookies", req);
        if (!cookies?.jwt) return res.sendStatus(204)
        res.clearCookie('jwt', { httpOnly: true, sameSite: 'none', secure: true })
        res.json({ message: 'Cookie cleared' })
    } catch (error) {
        return InternalServerError(res, error);
    }
}