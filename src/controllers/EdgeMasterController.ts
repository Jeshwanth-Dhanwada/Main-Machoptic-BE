import { Request, Response } from "express";
import { InternalServerError } from "../response/InternalServerErrorResponse";
import * as Joi from "joi";
import { EdgeMaster } from "../entity/EdgeMaster";

const edgeMasterSchema = Joi.object({
  edgeId: Joi.number(),
  id: Joi.string().required(),
  branchId: Joi.string().required(),
  routeId: Joi.string().required(),
  sequenceId: Joi.string().required(),
  sourceNodeId: Joi.number().required(),
  targetNodeId: Joi.number().required(),
  targetNodeType : Joi.string().required(),
  sourceNodeType : Joi.string().required(),
  sourceId: Joi.string().required(),
  targetId: Joi.string().required(),
  edgeDescription: Joi.string().required(),
  // targetNodeType:Joi.string().required(),
  unitsId:Joi.string().required(),
  materialType: Joi.string().required(),
  edgeStyle: Joi.string().required(),
  edgeColor: Joi.string().required(),
  edgeThickness: Joi.number().required(),
  animation: Joi.boolean().required(),
  arrow: Joi.boolean().required(),
  // Thickness: Joi.number().required(),
  label: Joi.string().allow('',null),
  userId:Joi.string().required(),

});

export const createEdgeMaster = async (req: Request, res: Response) => {
  const { error } = edgeMasterSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  try {
    const edgeMaster = new EdgeMaster();
    edgeMaster.id = req.body.id;
    edgeMaster.branchId = req.body.branchId;
    edgeMaster.routeId = req.body.routeId;
    edgeMaster.sequenceId = req.body.sequenceId;
    edgeMaster.sourceNodeId = req.body.sourceNodeId;
    edgeMaster.targetNodeId = req.body.targetNodeId;
    edgeMaster.targetNodeType = req.body.targetNodeType;
    edgeMaster.sourceNodeType = req.body.sourceNodeType;
    edgeMaster.sourceId = req.body.sourceId;
    edgeMaster.targetId = req.body.targetId;
    edgeMaster.edgeDescription = req.body.edgeDescription;
    // edgeMaster.targetNodeType = req.body.targetNodeType;
    edgeMaster.unitsId = req.body.unitsId;
    edgeMaster.materialType = req.body.materialType;
    edgeMaster.edgeStyle = req.body.edgeStyle;
    edgeMaster.edgeColor = req.body.edgeColor;
    edgeMaster.edgeThickness = req.body.edgeThickness;
    edgeMaster.animation = req.body.animation;
    edgeMaster.arrow = req.body.arrow;
    // edgeMaster.Thickness = req.body.Thickness
    edgeMaster.label = req.body.label
    edgeMaster.userId = req.body.userId
    await edgeMaster.save();
    return res.status(201).json(edgeMaster);
  } catch (error) {
    return InternalServerError(res, error);
  }
};

export const createBulkEdgeMaster = async (req: Request, res: Response) => {

  if (req.body.edges.length) {
    const edgeData = req.body.edges

    let responseData: any = []

    for (let i = 0; i < edgeData.length; i++) {
      const element = edgeData[i];
      const { error } = edgeMasterSchema.validate(element);

      if (error) {
        return res.status(400).json({ error: error.details[0].message });
      }

    }


    try {

      for (let i = 0; i < edgeData.length; i++) {
        const element = edgeData[i];
        const edgeMaster = new EdgeMaster();
        edgeMaster.id = element.id;
        edgeMaster.branchId = element.branchId;
        edgeMaster.routeId = element.routeId;
        edgeMaster.sequenceId = element.sequenceId;
        edgeMaster.sourceNodeId = element.sourceNodeId;
        edgeMaster.targetNodeId = element.targetNodeId;
        edgeMaster.targetNodeType = element.targetNodeType;
        edgeMaster.sourceNodeType = element.sourceNodeType;
        edgeMaster.sourceId = element.sourceId;
        edgeMaster.targetId = element.targetId;
        edgeMaster.edgeDescription = element.edgeDescription;
        // edgeMaster.targetNodeType = element.targetNodeType;
        edgeMaster.unitsId = element.unitsId;
        edgeMaster.materialType = element.materialType;
        edgeMaster.edgeStyle = element.edgeStyle;
        edgeMaster.edgeColor = element.edgeColor;
        edgeMaster.edgeThickness = element.edgeThickness;
        edgeMaster.animation = element.animation;
        edgeMaster.arrow = element.arrow;
        // edgeMaster.Thickness = element.Thickness
        edgeMaster.label = element.label
        edgeMaster.userId = element.userId
        responseData.push(await edgeMaster.save());

      }
      return res.status(201).json(responseData);
    } catch (error) {
      return InternalServerError(res, error);
    }
  }

};

export const getAllEdgeMaster = async (req: Request, res: Response) => {
  try {
    console.log(req.query.routeId);
    let edgeMasteres:any
    if(req.query.routeId){
      edgeMasteres = await EdgeMaster.find({routeId:req.query.routeId.toString()});
      console.log(edgeMasteres)
    }
    else{
      edgeMasteres = await EdgeMaster.find();
      console.log(edgeMasteres)
    }
    return res.json(edgeMasteres);
  } catch (error) {
    return InternalServerError(res, error);
  }
};



export const updateEdgeMaster = async (req: Request, res: Response) => {
  const { error } = edgeMasterSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  try {
    const edgeMaster = await EdgeMaster.findOne(req.params.id);
    if (!edgeMaster) {
      return res.status(404).json({ error: 'edgeMaster not found' });
    }
    edgeMaster.id = req.body.id;
    edgeMaster.branchId = req.body.branchId;
    edgeMaster.routeId = req.body.routeId;
    edgeMaster.sequenceId = req.body.sequenceId;
    edgeMaster.sourceNodeId = req.body.sourceNodeId;
    edgeMaster.targetNodeId = req.body.targetNodeId;
    edgeMaster.targetNodeType = req.body.targetNodeType;
    edgeMaster.sourceNodeType = req.body.sourceNodeType;
    edgeMaster.sourceId = req.body.sourceId;
    edgeMaster.targetId = req.body.targetId;
    edgeMaster.edgeDescription = req.body.edgeDescription;
    // edgeMaster.targetNodeType = req.body.targetNodeType;
    edgeMaster.unitsId = req.body.unitsId;
    edgeMaster.materialType = req.body.materialType;
    edgeMaster.edgeStyle = req.body.edgeStyle;
    edgeMaster.edgeColor = req.body.edgeColor;
    edgeMaster.edgeThickness = req.body.edgeThinkness;
    edgeMaster.animation = req.body.animation;
    edgeMaster.arrow = req.body.arrow;
    // edgeMaster.Thickness = req.body.Thickness
    edgeMaster.label = req.body.label
    edgeMaster.userId = req.body.userId

    await edgeMaster.save();
    return res.json(edgeMaster);
  } catch (error) {
    return InternalServerError(res, error);
  }
};

export const updateBulkEdgeMaster = async (req: Request, res: Response) => {

  if (req.body.edges.length) {
    const edgeData = req.body.edges

    let responseData: any = []

    for (let i = 0; i < edgeData.length; i++) {
      const element = edgeData[i];
      const { error } = edgeMasterSchema.validate(element);

      if (error) {
        return res.status(400).json({ error: error.details[0].message });
      }
    }
    try {

      for (let i = 0; i < edgeData.length; i++) {
        const element = edgeData[i];
        let edgeUpdateData:any;

        if(element.edgeId){
          console.log("update");
          edgeUpdateData = await updateDataEdgeMaster(element)
        }
        else{
          edgeUpdateData = await createDataEdgeMaster(element)
          console.log("add");
        }
        responseData.push(edgeUpdateData);

      }
      return res.status(201).json(responseData);
    } catch (error) {
      return InternalServerError(res, error);
    }
  }

};

const updateDataEdgeMaster = async (data: any) => {
  const { error } = edgeMasterSchema.validate(data);

  if (error) {
    return { error: error.details[0].message }
  }

  try {
    const edgeMaster = await EdgeMaster.findOne(data.edgeId);
    if (!edgeMaster) {
      return { error: 'edgeMaster not found' }
    }
    edgeMaster.id = data.id;
    edgeMaster.branchId = data.branchId;
    edgeMaster.routeId = data.routeId;
    edgeMaster.sequenceId = data.sequenceId;
    edgeMaster.sourceNodeId = data.sourceNodeId;
    edgeMaster.targetNodeId = data.targetNodeId;
    edgeMaster.targetNodeType = data.targetNodeType;
    edgeMaster.sourceNodeType = data.sourceNodeType;
    edgeMaster.sourceId = data.sourceId;
    edgeMaster.targetId = data.targetId;
    edgeMaster.edgeDescription = data.edgeDescription;
    // edgeMaster.targetNodeType = data.targetNodeType;
    edgeMaster.unitsId = data.unitsId;
    edgeMaster.materialType = data.materialType;
    edgeMaster.edgeStyle = data.edgeStyle;
    edgeMaster.edgeColor = data.edgeColor;
    edgeMaster.edgeThickness = data.edgeThinkness;
    edgeMaster.animation = data.animation;
    edgeMaster.arrow = data.arrow;
    // edgeMaster.Thickness = data.Thickness
    edgeMaster.label = data.label
    edgeMaster.userId = data.userId

    await edgeMaster.save();
    return edgeMaster

  } catch (error) {
    return error
  }
};

const createDataEdgeMaster = async (data: any) => {
  const { error } = edgeMasterSchema.validate(data);

  if (error) {
    return { error: error.details[0].message }
  }
  console.log("************",error)
  try {
    const edgeMaster = new EdgeMaster();
    edgeMaster.id = data.id;
    edgeMaster.branchId = data.branchId;
    edgeMaster.routeId = data.routeId;
    edgeMaster.sequenceId = data.sequenceId;
    edgeMaster.sourceNodeId = data.sourceNodeId;
    edgeMaster.targetNodeId = data.targetNodeId;
    edgeMaster.targetNodeType = data.targetNodeType;
    edgeMaster.sourceNodeType = data.sourceNodeType;
    edgeMaster.sourceId = data.sourceId;
    edgeMaster.targetId = data.targetId;
    edgeMaster.edgeDescription = data.edgeDescription;
    // edgeMaster.targetNodeType = data.targetNodeType;
    edgeMaster.unitsId = data.unitsId;
    edgeMaster.materialType = data.materialType;
    edgeMaster.edgeStyle = data.edgeStyle;
    edgeMaster.edgeColor = data.edgeColor;
    edgeMaster.edgeThickness = data.edgeThickness;
    edgeMaster.animation = data.animation;
    edgeMaster.arrow = data.arrow;
    // edgeMaster.Thickness = data.Thickness
    edgeMaster.label = data.label
    edgeMaster.userId = data.userId
    await edgeMaster.save();

    return edgeMaster
  } catch (error) {
    console.log(error)
    return error
  }
};

export const deleteEdgeMaster = async (req: Request, res: Response) => {
  try {
    const edgeMaster = await EdgeMaster.findOne(req.params.id);
    if (!edgeMaster) {
      return res.status(404).json({ error: 'edgeMaster not found' });
    }

    await edgeMaster.remove();
    return res.status(204).end();
  } catch (error) {
    return InternalServerError(res, error);
  }
};

export const edgeMasterById = async (req: Request, res: Response) => {
  try {
    const canvasMaster = await EdgeMaster.findOne(req.params.id);
    if (!canvasMaster) {
      return res.status(404).json({ error: 'Edge master not found' });
    }
    return res.json(canvasMaster);
  } catch (error) {
    return InternalServerError(res, error);
  }
};

