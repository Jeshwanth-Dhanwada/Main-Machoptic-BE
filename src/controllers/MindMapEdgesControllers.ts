import { Request, Response } from "express";
import { InternalServerError } from "../response/InternalServerErrorResponse";
import * as Joi from "joi";
import { MindMapEdgeMaster } from "../entity/MindMapEdges";

const edgeMasterSchema = Joi.object({
  edgeId: Joi.number(),
  id: Joi.string().required(),
  sourceId: Joi.string().required(),
  targetId: Joi.string().required(),
  type: Joi.string().required(),
  strokeWidth: Joi.number().required(),
  stroke: Joi.string().allow('', null),
  // animation: Joi.boolean().required(),
  arrow: Joi.boolean().allow('', null),
  userId:Joi.string().required(),

});

export const createEdgeMaster = async (req: Request, res: Response) => {
  const { error } = edgeMasterSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  try {
    const edgeMaster = new MindMapEdgeMaster();
    edgeMaster.id = req.body.id;
    edgeMaster.sourceId = req.body.sourceId;
    edgeMaster.targetId = req.body.targetId;
    edgeMaster.type = req.body.type;
    // edgeMaster.targetNodeType = req.body.targetNodeType;
    edgeMaster.arrow = req.body.arrow;
    // edgeMaster.Thickness = req.body.Thickness
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
        const edgeMaster = new MindMapEdgeMaster();
        edgeMaster.id = element.id;
        edgeMaster.sourceId = element.sourceId;
        edgeMaster.targetId = element.targetId;
        edgeMaster.type = element.type;
        // edgeMaster.targetNodeType = element.targetNodeType;
        edgeMaster.arrow = element.arrow;
        // edgeMaster.Thickness = element.Thickness
        edgeMaster.userId = element.userId
        responseData.push(await edgeMaster.save());

      }
      return res.status(201).json(responseData);
    } catch (error) {
      return InternalServerError(res, error);
    }
  }

};


export const getAllEdges = async (_: Request, res: Response) => {
  console.log('getAllEdges')
  try {
    const EdgeMasteres = await MindMapEdgeMaster.find();
    return res.json(EdgeMasteres);
  } catch (error) {
    return InternalServerError(res, error,);
  }
};



export const updateEdgeMaster = async (req: Request, res: Response) => {
  const { error } = edgeMasterSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  try {
    const edgeMaster = await MindMapEdgeMaster.findOne(req.params.id);
    if (!edgeMaster) {
      return res.status(404).json({ error: 'edgeMaster not found' });
    }
    edgeMaster.id = req.body.id;
    edgeMaster.sourceId = req.body.sourceId;
    edgeMaster.targetId = req.body.targetId;
    edgeMaster.type = req.body.type;
    edgeMaster.arrow = req.body.arrow;
    edgeMaster.strokeWidth = req.body.strokeWidth;
    edgeMaster.stroke = req.body.stroke;
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
    const edgeMaster = await MindMapEdgeMaster.findOne(data.edgeId);
    if (!edgeMaster) {
      return { error: 'edgeMaster not found' }
    }
    edgeMaster.id = data.id;
    edgeMaster.sourceId = data.sourceId;
    edgeMaster.targetId = data.targetId;
    edgeMaster.type = data.type;
    edgeMaster.arrow = data.arrow;
    edgeMaster.strokeWidth = data.strokeWidth;
    edgeMaster.stroke = data.stroke;
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
    const edgeMaster = new MindMapEdgeMaster();
    edgeMaster.id = data.id;
    edgeMaster.sourceId = data.sourceId;
    edgeMaster.targetId = data.targetId;
    edgeMaster.type = data.type;
    edgeMaster.arrow = data.arrow;
    edgeMaster.strokeWidth = data.strokeWidth;
    edgeMaster.stroke = data.stroke;
    // edgeMaster.Thickness = data.Thickness
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
    const edgeMaster = await MindMapEdgeMaster.findOne(req.params.id);
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
    const canvasMaster = await MindMapEdgeMaster.findOne(req.params.id);
    if (!canvasMaster) {
      return res.status(404).json({ error: 'Edge master not found' });
    }
    return res.json(canvasMaster);
  } catch (error) {
    return InternalServerError(res, error);
  }
};

