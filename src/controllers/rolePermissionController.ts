import { Request, Response } from "express";
import { InternalServerError } from "../response/InternalServerErrorResponse";
import * as Joi from "joi";
import { rolePermissions } from "../entity/rolePermissions"

const PermissionsSchema = Joi.object({
  id: Joi.number(),
  branchId: Joi.string().required(),
  menuId: Joi.string().required(),
  roleId: Joi.string().required(),
  access_all: Joi.boolean().required(),
  create: Joi.boolean().required(),
  read: Joi.boolean().required(),
  update: Joi.boolean().required(),
  delete: Joi.boolean().required(),
  userId: Joi.string().required(),
  key: Joi.string().required().allow(null),
});

export const createRolePermissions = async (req: Request, res: Response) => {
  const { error } = PermissionsSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  try {

    const rolepermission = new rolePermissions();
    rolepermission.branchId = req.body.branchId;
    rolepermission.menuId = req.body.menuId;
    rolepermission.roleId = req.body.roleId
    rolepermission.access_all = req.body.access_all
    rolepermission.create = req.body.create
    rolepermission.read = req.body.read
    rolepermission.update = req.body.update
    rolepermission.delete = req.body.delete
    rolepermission.userId = req.body.userId
    rolepermission.key = req.body.key

    await rolepermission.save();
    return res.status(201).json(rolepermission);
  } catch (error) {
    return InternalServerError(res, error);
  }
};

export const getAllRolePermissions = async (_: Request, res: Response) => {
  try {
    const rolepermission = await rolePermissions.find();
    return res.json(rolepermission);
  } catch (error) {
    return InternalServerError(res, error);
  }
};

export const updateRolePermissions = async (req: Request, res: Response) => {
  const { error } = PermissionsSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  try {
    const rolepermission = await rolePermissions.findOne(req.params.id);
    if (!rolepermission) {
      return res.status(404).json({ error: 'rolepermission not found' });
    }

    rolepermission.branchId = req.body.branchId;
    rolepermission.menuId = req.body.menuId;
    rolepermission.roleId = req.body.roleId
    rolepermission.access_all = req.body.access_all
    rolepermission.create = req.body.create
    rolepermission.read = req.body.read
    rolepermission.update = req.body.update
    rolepermission.delete = req.body.delete
    rolepermission.userId = req.body.userId
    rolepermission.key = req.body.key


    await rolepermission.save();
    return res.json(rolepermission);
  } catch (error) {
    return InternalServerError(res, error);
  }
};

export const updateBulkRolePermissions = async (req: Request, res: Response) => {

  if (req.body.rolepermission.length) {
    const rolepermissionData = req.body.rolepermission

    let responseData: any = []

    for (let i = 0; i < rolepermissionData.length; i++) {
      const element = rolepermissionData[i];
      const { error } = PermissionsSchema.validate(element);

      if (error) {
        return res.status(400).json({ error: error.details[0].message });
      }

    }

    try {

      for (let i = 0; i < rolepermissionData.length; i++) {
        const element = rolepermissionData[i];
        const rolepermission = await rolePermissions.findOne({ key: element.key });
        let rolepermissionUpdateData: any;
        console.log(rolepermission);

        if (rolepermission) {
          console.log("update");
          rolepermissionUpdateData = await updateDataRolePermission(element, rolepermission)
        }

        else {
          rolepermissionUpdateData = await createDataRolePermission(element)
          console.log("add");
        }

        responseData.push(rolepermissionUpdateData);

      }
      return res.status(201).json(responseData);
    } catch (error) {
      return InternalServerError(res, error);
    }
  }

};

const updateDataRolePermission = async (data: any, rolepermission: any) => {
  console.log("Incoming");

  const { error } = PermissionsSchema.validate(data);

  if (error) {
    return { error: error.details[0].message }
  }

  try {
    if (!rolepermission) {
      return { error: error.details[0].message }
    }

    rolepermission.branchId = data.branchId;
    rolepermission.menuId = data.menuId;
    rolepermission.roleId = data.roleId
    rolepermission.access_all = data.access_all
    rolepermission.create = data.create
    rolepermission.read = data.read
    rolepermission.update = data.update
    rolepermission.delete = data.delete
    rolepermission.userId = data.userId
    rolepermission.key = data.key

    await rolepermission.save();

    return rolepermission

  } catch (error) {
    return error
  }
};

const createDataRolePermission = async (data: any) => {
  const { error } = PermissionsSchema.validate(data);

  if (error) {
    return { error: error.details[0].message }
  }

  try {

    const rolepermission = new rolePermissions();
    rolepermission.branchId = data.branchId;
    rolepermission.menuId = data.menuId;
    rolepermission.roleId = data.roleId
    rolepermission.access_all = data.access_all
    rolepermission.create = data.create
    rolepermission.read = data.read
    rolepermission.update = data.update
    rolepermission.delete = data.delete
    rolepermission.userId = data.userId
    rolepermission.key = data.key

    await rolepermission.save();

    return rolepermission
  } catch (error) {
    console.log(error)
    return error
  }
};

export const deleteRolePermission = async (req: Request, res: Response) => {
  try {
    const rolepermission = await rolePermissions.findOne(req.params.id);
    if (!rolepermission) {
      return res.status(404).json({ error: 'rolepermission not found' });
    }

    await rolepermission.remove();
    return res.status(204).end();
  } catch (error) {
    return InternalServerError(res, error);
  }
};

export const RolePermissionById = async (req: Request, res: Response) => {
  try {
    const rolepermission = await rolePermissions.findOne(req.params.id);
    if (!rolepermission) {
      return res.status(404).json({ error: 'rolepermission not found' });
    }
    return res.json(rolepermission);
  } catch (error) {
    return InternalServerError(res, error);
  }
};



