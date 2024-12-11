import { Request, Response } from "express";
import { InternalServerError } from "../response/InternalServerErrorResponse";
import * as Joi from "joi";
import { MindMapNodeMaster } from "../entity/MindMapNodes";



const nodeMasterSchema = Joi.object({
  nodeId: Joi.number(),
  id: Joi.string().required(),
  nodeName: Joi.string().required(),
  width: Joi.string().required(),
  height: Joi.string().required(),
  xPosition: Joi.number().required(),
  yPosition: Joi.number().required(),
  backgroundColor: Joi.string().allow('', null),
  borderRadius: Joi.string().allow('', null),
  borderWidth: Joi.string().allow('', null),
  borderColor: Joi.string().allow('', null),
  fillColor: Joi.string().allow('', null),
  sourcePosition: Joi.string().allow('', null),
  targetPosition: Joi.string().allow('', null),
  FontColor: Joi.string().allow('', null),
  FontStyle: Joi.string().allow('', null),
  parent: Joi.string().allow('', null),
  FontSize: Joi.string().allow('', null),
  userId: Joi.string().required(),
  type: Joi.string().allow('', null),
  level: Joi.number().allow('', null),
  Collapsed: Joi.boolean().allow('', null),
  constant: Joi.string().allow('', null),
  value: Joi.number().allow('', null),
  modelid: Joi.number().allow('', null),
  datatable: Joi.string().allow('', null),
  datacolumn: Joi.string().allow('', null),
  aggregatedvalue: Joi.string().allow('', null),
  checkFlag: Joi.boolean().allow('', null),

});


export const createNodeMaster = async (req: Request, res: Response) => {
  console.log("request body:", req.body)
  const { error } = nodeMasterSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  try {

    const nodeMaster = new MindMapNodeMaster();
    nodeMaster.id = req.body.id;
    nodeMaster.nodeName = req.body.nodeName;
    nodeMaster.width = req.body.width;
    nodeMaster.height = req.body.height;
    nodeMaster.xPosition = req.body.xPosition;
    nodeMaster.yPosition = req.body.yPosition;
    nodeMaster.backgroundColor = req.body.backgroundColor;
    nodeMaster.borderColor = req.body.borderColor;
    nodeMaster.borderWidth = req.body.borderWidth;
    // nodeMaster.borderStyle = req.body.borderStyle;
    nodeMaster.fillColor = req.body.fillColor;
    nodeMaster.sourcePosition = req.body.sourcePosition;
    nodeMaster.targetPosition = req.body.targetPosition;
    nodeMaster.FontColor = req.body.FontColor
    nodeMaster.FontStyle = req.body.FontStyle
    nodeMaster.FontSize = req.body.FontSize
    nodeMaster.userId = req.body.userId
    nodeMaster.borderRadius = req.body.borderRadius
    nodeMaster.type = req.body.type
    nodeMaster.parent = req.body.parent
    nodeMaster.level = req.body.level
    nodeMaster.Collapsed = req.body.Collapsed
    nodeMaster.constant = req.body.constant
    nodeMaster.value = req.body.value
    nodeMaster.modelid = req.body.modelid
    nodeMaster.datatable = req.body.datatable
    nodeMaster.datacolumn = req.body.datacolumn
    nodeMaster.aggregatedvalue = req.body.aggregatedvalue
    nodeMaster.checkFlag = req.body.checkFlag
    await nodeMaster.save();
    return res.status(201).json(nodeMaster);
  } catch (error) {
    return InternalServerError(res, error);
  }
};

export const createBulkNodeMaster = async (req: Request, res: Response) => {

  if (req.body.nodes) {
    const nodeData = req.body.nodes

    let responseData: any = []

    for (let i = 0; i < nodeData.length; i++) {
      const element = nodeData[i];
      const { error } = nodeMasterSchema.validate(element);

      if (error) {
        return res.status(400).json({ error: error.details[0].message });
      }

    }


    try {

      for (let i = 0; i < nodeData.length; i++) {
        const element = nodeData[i];
        const nodeMaster = new MindMapNodeMaster();
        nodeMaster.id = element.id;
        nodeMaster.nodeName = element.nodeName;
        nodeMaster.width = element.width;
        nodeMaster.height = element.height;
        nodeMaster.xPosition = element.xPosition;
        nodeMaster.yPosition = element.yPosition;
        nodeMaster.backgroundColor = element.backgroundColor;
        nodeMaster.borderRadius = element.borderRadius;
        nodeMaster.borderWidth = element.borderWidth;
        nodeMaster.borderColor = element.borderColor;
        nodeMaster.fillColor = element.fillColor;
        nodeMaster.sourcePosition = element.sourcePosition;
        nodeMaster.targetPosition = element.targetPosition;
        nodeMaster.FontColor = element.FontColor
        nodeMaster.FontStyle = element.FontStyle
        nodeMaster.parent = element.parent
        nodeMaster.FontSize = element.FontSize
        nodeMaster.userId = element.userId
        nodeMaster.type = element.type
        nodeMaster.level = element.level
        nodeMaster.Collapsed = element.Collapsed
        nodeMaster.constant = element.constant
        nodeMaster.value = element.value
        nodeMaster.modelid = element.modelid
        nodeMaster.datatable = element.datatable
        nodeMaster.datacolumn = element.datacolumn
        nodeMaster.aggregatedvalue = element.aggregatedvalue
        nodeMaster.checkFlag = element.checkFlag
        responseData.push(await nodeMaster.save());

      }
      return res.status(201).json(responseData);
    } catch (error) {
      return InternalServerError(res, error);
    }
  }

};

export const getAllNodeMaster = async (_: Request, res: Response) => {
  console.log("getallnodes",)
  try {
    const nodeMasteres = await MindMapNodeMaster.find();
    return res.json(nodeMasteres);
  } catch (error) {
    return InternalServerError(res, error);
  }
};
export const getNodes = async (_: Request, res: Response) => {
  console.log("getallnodes",)
  try {
    const nodeMasteres = await MindMapNodeMaster.find();
    return res.json(nodeMasteres);
  } catch (error) {
    return InternalServerError(res, error);
  }
};

export const updateNodeMaster = async (req: Request, res: Response) => {

  const { error } = nodeMasterSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  try {
    const nodeMaster = await MindMapNodeMaster.findOne(req.params.nodeId);
    if (!nodeMaster) {
      return res.status(404).json({ error: 'nodeMaster not found' });
    }

    nodeMaster.nodeId = req.body.nodeId;
    nodeMaster.width = req.body.width;
    nodeMaster.borderRadius = req.body.borderRadius;
    nodeMaster.height = req.body.height;
    nodeMaster.xPosition = req.body.xPosition;
    nodeMaster.yPosition = req.body.yPosition;
    nodeMaster.backgroundColor = req.body.backgroundColor;
    nodeMaster.borderColor = req.body.borderColor;
    nodeMaster.borderWidth = req.body.borderWidth;
    // nodeMaster.borderStyle = req.body.borderStyle;
    nodeMaster.fillColor = req.body.fillColor;
    nodeMaster.sourcePosition = req.body.sourcePosition;
    nodeMaster.targetPosition = req.body.targetPosition;
    nodeMaster.FontColor = req.body.FontColor
    nodeMaster.FontStyle = req.body.FontStyle
    nodeMaster.FontSize = req.body.FontSize
    nodeMaster.userId = req.body.userId
    nodeMaster.type = req.body.type
    nodeMaster.parent = req.body.parent
    nodeMaster.level = req.body.level
    nodeMaster.Collapsed = req.body.Collapsed
    nodeMaster.constant = req.body.constant
    nodeMaster.value = req.body.value
    nodeMaster.modelid = req.body.modelid
    nodeMaster.datatable = req.body.datatable
    nodeMaster.datacolumn = req.body.datacolumn
    nodeMaster.aggregatedvalue = req.body.aggregatedvalue
    nodeMaster.checkFlag = req.body.checkFlag

    await nodeMaster.save();
    return res.json(nodeMaster);
  } catch (error) {
    return InternalServerError(res, error);
  }
};
export const updateBulkNodeMaster = async (req: Request, res: Response) => {
  if (req.body.nodes.length) {
    const nodeData = req.body.nodes;
    const promises = [];

    for (let i = 0; i < nodeData.length; i++) {
      const element = nodeData[i];
      const { error } = nodeMasterSchema.validate(element);

      if (error) {
        return res.status(400).json({ error: error.details[0].message });
      }

      if (element.nodeId) {
        promises.push(updateDataNodeMaster(element));
      } else {
        promises.push(createDataNodeMaster(element));
      }
    }

    try {
      const responseData = await Promise.all(promises);
      return res.status(201).json(responseData);
    } catch (error) {
      return InternalServerError(res, error);
    }
  }
};

// export const updateBulkNodeMaster = async (req: Request, res: Response) => {

//   if (req.body.nodes.length) {
//     const nodeData = req.body.nodes
//     let responseData: any = []
//     for (let i = 0; i < nodeData.length; i++) {

//       const element = nodeData[i];
//       const { error } = nodeMasterSchema.validate(element);

//       if (error) {
//         return res.status(400).json({ error: error.details[0].message });
//       }

//     }

//     try {

//       for (let i = 0; i < nodeData.length; i++) {
//         const element = nodeData[i];
//         let nodeUpdateData: any;
//         console.log("elementid:",element);
//         if (element.nodeId) {
//           console.log("updating nodes.....",element);

//           nodeUpdateData = await updateDataNodeMaster(element)
//         }

//         else {
//           console.log("create new",element);
//           nodeUpdateData = await createDataNodeMaster(element)
//         }
//         responseData.push(nodeUpdateData);

//       }
//       return res.status(201).json(responseData);
//     } catch (error) {
//       return InternalServerError(res, error);
//     }
//   }

// };

const updateDataNodeMaster = async (data: any) => {
  const { error } = nodeMasterSchema.validate(data);
  if (error) {
    return { error: error.details[0].message }
  }

  try {
    const nodeMaster = await MindMapNodeMaster.findOne(data.nodeId);
    if (!nodeMaster) {
      return { error: 'nodeMaster not found' }
    }
    nodeMaster.id = data.id;
    nodeMaster.nodeName = data.nodeName;
    nodeMaster.width = data.width;
    nodeMaster.height = data.height;
    nodeMaster.xPosition = data.xPosition;
    nodeMaster.yPosition = data.yPosition;
    nodeMaster.backgroundColor = data.backgroundColor;
    nodeMaster.borderRadius = data.borderRadius;
    nodeMaster.borderWidth = data.borderWidth;
    nodeMaster.borderColor = data.borderColor;
    nodeMaster.fillColor = data.fillColor;
    nodeMaster.sourcePosition = data.sourcePosition;
    nodeMaster.targetPosition = data.targetPosition;
    nodeMaster.FontColor = data.FontColor
    nodeMaster.FontStyle = data.FontStyle
    nodeMaster.parent = data.parent
    nodeMaster.FontSize = data.FontSize
    nodeMaster.userId = data.userId
    nodeMaster.type = data.type
    nodeMaster.level = data.level
    nodeMaster.Collapsed = data.Collapsed
    nodeMaster.constant = data.constant
    nodeMaster.value = data.value
    nodeMaster.modelid = data.modelid
    nodeMaster.datatable = data.datatable
    nodeMaster.datacolumn = data.datacolumn
    nodeMaster.aggregatedvalue = data.aggregatedvalue
    nodeMaster.checkFlag = data.checkFlag

    await nodeMaster.save();
    return nodeMaster
  } catch (error) {
    return error
  }
};

const createDataNodeMaster = async (data: any) => {
  const { error } = nodeMasterSchema.validate(data);

  if (error) {
    return { error: error.details[0].message }
  }

  try {
    const nodeMaster = new MindMapNodeMaster();
    nodeMaster.id = data.id;
    nodeMaster.nodeName = data.nodeName;
    nodeMaster.width = data.width;
    nodeMaster.height = data.height;
    nodeMaster.xPosition = data.xPosition;
    nodeMaster.yPosition = data.yPosition;
    nodeMaster.backgroundColor = data.backgroundColor;
    nodeMaster.borderRadius = data.borderRadius;
    nodeMaster.borderWidth = data.borderWidth;
    nodeMaster.borderColor = data.borderColor;
    nodeMaster.fillColor = data.fillColor;
    nodeMaster.sourcePosition = data.sourcePosition;
    nodeMaster.targetPosition = data.targetPosition;
    nodeMaster.FontColor = data.FontColor
    nodeMaster.FontStyle = data.FontStyle
    nodeMaster.parent = data.parent
    nodeMaster.FontSize = data.FontSize
    nodeMaster.type = data.type
    nodeMaster.level = data.level
    nodeMaster.Collapsed = data.Collapsed
    nodeMaster.constant = data.constant
    nodeMaster.modelid = data.modelid
    nodeMaster.userId = data.userId
    nodeMaster.modelid = data.modelid
    nodeMaster.datatable = data.datatable
    nodeMaster.datacolumn = data.datacolumn
    nodeMaster.aggregatedvalue = data.aggregatedvalue
    nodeMaster.checkFlag = data.checkFlag
    await nodeMaster.save();

    return nodeMaster
  } catch (error) {
    console.log(error)
    return error
  }
};

export const deleteNodeMaster = async (req: Request, res: Response) => {
  try {
    const nodeMaster = await MindMapNodeMaster.findOne(req.params.id);
    if (!nodeMaster) {
      return res.status(404).json({ error: 'nodeMaster not found' });
    }

    await nodeMaster.remove();
    return res.status(204).end();
  } catch (error) {
    return InternalServerError(res, error);
  }
};

// export const deleteNodeMaster = async (req: Request, res: Response) => {
//   try {
//     const nodeIds = req.body
//     console.log("nodeids for delete:",req.body);
//     if (!nodeIds || nodeIds.length === 0) {
//       return res.status(400).json({ error: 'No nodeIds provided' });
//     }

//     const nodeMasters = await MindMapNodeMaster.findByIds(nodeIds);
//     if (nodeMasters.length === 0) {
//       return res.status(404).json({ error: 'No nodeMasters found' });
//     }

//     await Promise.all(nodeMasters.map((nodeMaster) => nodeMaster.remove()));
//     return res.status(204).end();
//   } catch (error) {
//     return InternalServerError(res, error);
//   }
// };

export const nodeMasterById = async (req: Request, res: Response) => {
  try {
    const nodeMaster = await MindMapNodeMaster.findOne(req.params.id);
    if (!nodeMaster) {
      return res.status(404).json({ error: 'Node master not found' });
    }
    return res.json(nodeMaster);
  } catch (error) {
    return InternalServerError(res, error);
  }
};

export const updateCheckFlagNodeMaster = async (req: Request, res: Response) => {
  console.log("nodeid **:",)
  const nodeId = req.params.nodeId;
  const { checkFlag } = req.body;
  try {
    // Find the node master by nodeId
    const nodeMaster = await MindMapNodeMaster.findOne({ where: { nodeId } });

    if (!nodeMaster) {
      return res.status(404).json({ error: 'NodeMaster not found' });
    }

    // Update the checkFlag column
    nodeMaster.checkFlag = checkFlag;

    // Save the updated node master back to the database
    await nodeMaster.save();

    // Return the updated node master data
    return res.json(nodeMaster);
  } catch (error) {
    return res.status(500).json({ error: 'An error occurred while updating checkFlag' });
  }
};
