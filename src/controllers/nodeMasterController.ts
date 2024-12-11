import { Request, Response } from "express";
import { InternalServerError } from "../response/InternalServerErrorResponse";
import * as Joi from "joi";
import { NodeMaster } from "../entity/NodeMaster";



const nodeMasterSchema = Joi.object({
  nodeId: Joi.number(),
  id: Joi.string().required(),
  branchId: Joi.string().required(),
  nodeCategoryId: Joi.string().allow('', null),
  nodeName: Joi.string().required(),
  itemDescription: Joi.string().allow('', null),
  nodeType: Joi.string().allow('', null),
  nodeCategory: Joi.string().allow('', null),
  width: Joi.string().required(),
  height: Joi.string().required(),
  xPosition: Joi.number().required(),
  yPosition: Joi.number().required(),
  borderColor: Joi.string().allow('', null),
  borderWidth: Joi.string().allow('', null),
  borderStyle: Joi.string().allow('', null),
  fillColor: Joi.string().allow('', null),
  fillTransparency: Joi.string().allow('', null),
  isRootNode: Joi.boolean().required(),
  isParent: Joi.boolean().required(),
  formula: Joi.string().allow('', null),
  fuelUsed: Joi.string().allow('', null),
  fuelUnitsId: Joi.string().allow('', null),
  capacity: Joi.string().allow('', null),
  capacityUnitsId: Joi.string().allow('', null),
  sourcePosition: Joi.string().allow('', null),
  targetPosition: Joi.string().allow('', null),
  FontColor: Joi.string().allow('', null),
  FontStyle: Joi.string().allow('', null),
  FontSize: Joi.string().allow('', null),
  userId: Joi.string().required(),
  borderRadius: Joi.string().allow('', null),
  units1: Joi.string().allow('', null),
  units2: Joi.string().allow('', null),
  unit1Measurable: Joi.string().allow('', null),
  unit2Mandatory: Joi.string().allow('', null),
  allowExcessQty: Joi.string().allow('', null),
  type: Joi.string().allow('', null),
  parentNode: Joi.string().allow('', null),
  extent: Joi.string().allow('', null),
  iconId: Joi.string().allow('', null),
  nodeImage: Joi.string().allow('', null),
  inputMeasurable: Joi.string().allow('', null),
  outputMeasurable: Joi.string().allow('', null),
  percentage_rejects: Joi.number().allow('', null),
  date: Joi.date().allow('', null),
});

export const createNodeMaster = async (req: Request, res: Response) => {
  const { error } = nodeMasterSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  try {
    const nodeMaster = new NodeMaster();
    nodeMaster.id = req.body.id;
    nodeMaster.branchId = req.body.branchId;
    nodeMaster.nodeCategoryId = req.body.nodeCategoryId;
    nodeMaster.nodeCategory = req.body.nodeCategory;
    nodeMaster.nodeType = req.body.nodeType;
    nodeMaster.nodeName = req.body.nodeName;
    nodeMaster.itemDescription = req.body.itemDescription;
    nodeMaster.width = req.body.width;
    nodeMaster.height = req.body.height;
    nodeMaster.xPosition = req.body.xPosition;
    nodeMaster.yPosition = req.body.yPosition;
    nodeMaster.borderColor = req.body.borderColor;
    nodeMaster.borderWidth = req.body.borderWidth;
    nodeMaster.borderStyle = req.body.borderStyle;
    nodeMaster.fillColor = req.body.fillColor;
    nodeMaster.fillTransparency = req.body.fillTransparency;
    nodeMaster.isRootNode = req.body.isRootNode;
    nodeMaster.isParent = req.body.isParent;
    nodeMaster.formula = req.body.formula;
    // nodeMaster.inputMaterialId = req.body.inputMaterialId;
    // nodeMaster.outputMaterialId = req.body.outputMaterialId;
    // nodeMaster.inputMaterialUnitId = req.body.inputMaterialUnitId;
    // nodeMaster.outputMaterialUnitId = req.body.outputMaterialUnitId;
    nodeMaster.fuelUsed = req.body.fuelUsed;
    nodeMaster.fuelUnitsId = req.body.fuelUnitsId;
    nodeMaster.capacity = req.body.capacity;
    nodeMaster.capacityUnitsId = req.body.capacityUnitsId;
    nodeMaster.sourcePosition = req.body.sourcePosition;
    nodeMaster.targetPosition = req.body.targetPosition;
    nodeMaster.FontColor = req.body.FontColor
    nodeMaster.FontStyle = req.body.FontStyle
    nodeMaster.FontSize = req.body.FontSize
    nodeMaster.userId = req.body.userId
    nodeMaster.borderRadius = req.body.borderRadius
    nodeMaster.units1 = req.body.units1
    nodeMaster.units2 = req.body.units2
    nodeMaster.unit1Measurable = req.body.unit1Measurable
    nodeMaster.unit2Mandatory = req.body.unit2Mandatory
    nodeMaster.allowExcessQty = req.body.allowExcessQty
    nodeMaster.type = req.body.type
    nodeMaster.parentNode = req.body.parentNode
    nodeMaster.extent = req.body.extent
    nodeMaster.iconId = req.body.iconId
    nodeMaster.inputMeasurable = req.body.inputMeasurable
    nodeMaster.outputMeasurable = req.body.outputMeasurable
    nodeMaster.percentage_rejects = req.body.percentage_rejects
    nodeMaster.date = req.body.date
    nodeMaster.nodeImage = req.body.nodeImage
    await nodeMaster.save();
    return res.status(201).json(nodeMaster);
  } catch (error) {
    return InternalServerError(res, error);
  }
};

export const createBulkNodeMaster = async (req: Request, res: Response) => {

  if (req.body.nodes.length) {
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
        const nodeMaster = new NodeMaster();
        nodeMaster.id = element.id;
        nodeMaster.branchId = element.branchId;
        nodeMaster.nodeCategoryId = element.nodeCategoryId;
        nodeMaster.nodeCategory = element.nodeCategory;
        nodeMaster.nodeType = element.nodeType;
        nodeMaster.nodeName = element.nodeName;
        nodeMaster.itemDescription = element.itemDescription;
        nodeMaster.width = element.width;
        nodeMaster.height = element.height;
        nodeMaster.xPosition = element.xPosition;
        nodeMaster.yPosition = element.yPosition;
        nodeMaster.borderColor = element.borderColor;
        nodeMaster.borderWidth = element.borderWidth;
        nodeMaster.borderStyle = element.borderStyle;
        nodeMaster.fillColor = element.fillColor;
        nodeMaster.fillTransparency = element.fillTransparency;
        nodeMaster.isRootNode = element.isRootNode;
        nodeMaster.isParent = element.isParent;
        nodeMaster.formula = element.formula;
        // nodeMaster.inputMaterialId = element.inputMaterialId;
        // nodeMaster.outputMaterialId = element.outputMaterialId;
        // nodeMaster.inputMaterialUnitId = element.inputMaterialUnitId;
        // nodeMaster.outputMaterialUnitId = element.outputMaterialUnitId;
        nodeMaster.fuelUsed = element.fuelUsed;
        nodeMaster.fuelUnitsId = element.fuelUnitsId;
        nodeMaster.capacity = element.capacity;
        nodeMaster.capacityUnitsId = element.capacityUnitsId;
        nodeMaster.sourcePosition = element.sourcePosition;
        nodeMaster.targetPosition = element.targetPosition;
        nodeMaster.FontColor = element.FontColor
        nodeMaster.FontStyle = element.FontStyle
        nodeMaster.FontSize = element.FontSize
        nodeMaster.userId = element.userId
        nodeMaster.borderRadius = element.borderRadius
        nodeMaster.units1 = element.units1
        nodeMaster.units2 = element.units2
        nodeMaster.unit1Measurable = element.unit1Measurable
        nodeMaster.unit2Mandatory = element.unit2Mandatory
        nodeMaster.allowExcessQty = element.allowExcessQty
        nodeMaster.type = element.type
        nodeMaster.parentNode = element.parentNode
        nodeMaster.extent = element.extent
        nodeMaster.iconId = element.iconId
        nodeMaster.nodeImage = element.nodeImage
        nodeMaster.inputMeasurable = element.inputMeasurable
        nodeMaster.outputMeasurable = element.outputMeasurable
        nodeMaster.percentage_rejects = element.percentage_rejects
        nodeMaster.date = element.date
        responseData.push(await nodeMaster.save());

      }
      return res.status(201).json(responseData);
    } catch (error) {
      return InternalServerError(res, error);
    }
  }

};

export const getAllNodeMaster = async (_: Request, res: Response) => {
  try {
    const nodeMasteres = await NodeMaster.find();
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
    const nodeMaster = await NodeMaster.findOne(req.params.id);
    if (!nodeMaster) {
      return res.status(404).json({ error: 'nodeMaster not found' });
    }

    nodeMaster.id = req.body.id;
    nodeMaster.branchId = req.body.branchId;
    nodeMaster.nodeCategoryId = req.body.nodeCategoryId;
    nodeMaster.nodeCategory = req.body.nodeCategory;
    nodeMaster.nodeType = req.body.nodeType;
    nodeMaster.nodeName = req.body.nodeName;
    nodeMaster.itemDescription = req.body.itemDescription;
    nodeMaster.width = req.body.width;
    nodeMaster.borderRadius = req.body.borderRadius;
    nodeMaster.height = req.body.height;
    nodeMaster.xPosition = req.body.xPosition;
    nodeMaster.yPosition = req.body.yPosition;
    nodeMaster.borderColor = req.body.borderColor;
    nodeMaster.borderWidth = req.body.borderWidth;
    nodeMaster.borderStyle = req.body.borderStyle;
    nodeMaster.fillColor = req.body.fillColor;
    nodeMaster.fillTransparency = req.body.fillTransparency;
    nodeMaster.isRootNode = req.body.isRootNode;
    nodeMaster.isParent = req.body.isParent;
    nodeMaster.formula = req.body.formula;
    // nodeMaster.inputMaterialId = req.body.inputMaterialId;
    // nodeMaster.outputMaterialId = req.body.outputMaterialId;
    // nodeMaster.inputMaterialUnitId = req.body.inputMaterialUnitId;
    // nodeMaster.outputMaterialUnitId = req.body.outputMaterialUnitId;
    nodeMaster.fuelUsed = req.body.fuelUsed;
    nodeMaster.fuelUnitsId = req.body.fuelUnitsId;
    nodeMaster.capacity = req.body.capacity;
    nodeMaster.capacityUnitsId = req.body.capacityUnitsId;
    nodeMaster.sourcePosition = req.body.sourcePosition;
    nodeMaster.targetPosition = req.body.targetPosition;
    nodeMaster.FontColor = req.body.FontColor
    nodeMaster.FontStyle = req.body.FontStyle
    nodeMaster.FontSize = req.body.FontSize
    nodeMaster.userId = req.body.userId
    nodeMaster.units1 = req.body.units1
    nodeMaster.units2 = req.body.units2
    nodeMaster.unit1Measurable = req.body.unit1Measurable
    nodeMaster.unit2Mandatory = req.body.unit2Mandatory
    nodeMaster.allowExcessQty = req.body.allowExcessQty
    nodeMaster.type = req.body.type
    nodeMaster.parentNode = req.body.parentNode
    nodeMaster.extent = req.body.extent
    nodeMaster.iconId = req.body.iconId
    nodeMaster.nodeImage = req.body.nodeImage
    nodeMaster.inputMeasurable = req.body.inputMeasurable
    nodeMaster.outputMeasurable = req.body.outputMeasurable
    nodeMaster.percentage_rejects = req.body.percentage_rejects
    nodeMaster.date = req.body.date

    await nodeMaster.save();
    return res.json(nodeMaster);
  } catch (error) {
    return InternalServerError(res, error);
  }
};

export const updateBulkNodeMaster = async (req: Request, res: Response) => {

  if (req.body.nodes.length) {
    const nodeData = req.body.nodes
    console.log(nodeData, "adding")

    let responseData: any = []


    for (let i = 0; i < nodeData.length; i++) {
      const element = nodeData[i];
      console.log(element);

      const { error } = nodeMasterSchema.validate(element);

      if (error) {
        return res.status(400).json({ error: error.details[0].message });
      }

    }


    try {

      for (let i = 0; i < nodeData.length; i++) {
        const element = nodeData[i];
        let nodeUpdateData: any;

        if (element.nodeId) {
          console.log("update");
          nodeUpdateData = await updateDataNodeMaster(element)
        }

        else {
          nodeUpdateData = await createDataNodeMaster(element)
          console.log("add");
        }
        // const nodeMaster = await NodeMaster.findOne(element.id);
        // if (!nodeMaster) {
        //   return res.status(404).json({ error: 'nodeMaster not found' });
        // }
        // nodeMaster.nodeId = element.nodeId;

        // nodeMaster.branchId = element.branchId;
        // nodeMaster.nodeCategoryId = element.nodeCategoryId;
        // nodeMaster.nodeName = element.nodeName;
        // nodeMaster.width = element.width;
        // nodeMaster.height = element.height;
        // nodeMaster.xPosition = element.xPosition;
        // nodeMaster.yPosition = element.yPosition;
        // nodeMaster.borderColor = element.borderColor;
        // nodeMaster.borderWidth = element.borderWidth;
        // nodeMaster.borderStyle = element.borderStyle;
        // nodeMaster.fillColor = element.fillColor;
        // nodeMaster.fillTransparency = element.fillTransparency;
        // nodeMaster.isRootNode = element.isRootNode;
        // nodeMaster.isParent = element.isParent;
        // nodeMaster.formula = element.formula;
        // nodeMaster.inputMaterialId = element.inputMaterialId;
        // nodeMaster.outputMaterialId = element.outputMaterialId;
        // nodeMaster.inputMaterialUnitId = element.inputMaterialUnitId;
        // nodeMaster.outputMaterialUnitId = element.outputMaterialUnitId;
        // nodeMaster.fuelUsed = element.fuelUsed;
        // nodeMaster.fuelUnitsId = element.fuelUnitsId;
        // nodeMaster.capacity = element.capacity;
        // nodeMaster.capacityUnitsId = element.capacityUnitsId;
        responseData.push(nodeUpdateData);

      }
      return res.status(201).json(responseData);
    } catch (error) {
      return InternalServerError(res, error);
    }
  }

};

const updateDataNodeMaster = async (data: any) => {
  const { error } = nodeMasterSchema.validate(data);

  if (error) {
    return { error: error.details[0].message }
  }

  try {
    const nodeMaster = await NodeMaster.findOne(data.nodeId);
    if (!nodeMaster) {
      return { error: 'nodeMaster not found' }
    }
    console.log(data.borderRadius, "borderRadius,,,,")
    nodeMaster.id = data.id;
    nodeMaster.branchId = data.branchId;
    nodeMaster.nodeCategoryId = data.nodeCategoryId;
    nodeMaster.nodeCategory = data.nodeCategory;
    nodeMaster.nodeType = data.nodeType;
    nodeMaster.nodeName = data.nodeName;
    nodeMaster.itemDescription = data.itemDescription;
    nodeMaster.width = data.width;
    nodeMaster.height = data.height;
    nodeMaster.borderRadius = data.borderRadius;
    nodeMaster.xPosition = data.xPosition;
    nodeMaster.yPosition = data.yPosition;
    nodeMaster.borderColor = data.borderColor;
    nodeMaster.borderWidth = data.borderWidth;
    nodeMaster.borderStyle = data.borderStyle;
    nodeMaster.fillColor = data.fillColor;
    nodeMaster.fillTransparency = data.fillTransparency;
    nodeMaster.isRootNode = data.isRootNode;
    nodeMaster.isParent = data.isParent;
    nodeMaster.formula = data.formula;
    // nodeMaster.inputMaterialId = data.inputMaterialId;
    // nodeMaster.outputMaterialId = data.outputMaterialId;
    // nodeMaster.inputMaterialUnitId = data.inputMaterialUnitId;
    // nodeMaster.outputMaterialUnitId = data.outputMaterialUnitId;
    nodeMaster.fuelUsed = data.fuelUsed;
    nodeMaster.fuelUnitsId = data.fuelUnitsId;
    nodeMaster.capacity = data.capacity;
    nodeMaster.capacityUnitsId = data.capacityUnitsId;
    nodeMaster.sourcePosition = data.sourcePosition;
    nodeMaster.targetPosition = data.targetPosition;
    nodeMaster.FontColor = data.FontColor
    nodeMaster.FontStyle = data.FontStyle
    nodeMaster.FontSize = data.FontSize
    nodeMaster.userId = data.userId
    nodeMaster.units1 = data.units1
    nodeMaster.units2 = data.units2
    nodeMaster.unit1Measurable = data.unit1Measurable
    nodeMaster.unit2Mandatory = data.unit2Mandatory
    nodeMaster.allowExcessQty = data.allowExcessQty
    nodeMaster.type = data.type
    nodeMaster.parentNode = data.parentNode
    nodeMaster.extent = data.extent
    nodeMaster.iconId = data.iconId
    nodeMaster.nodeImage = data.nodeImage
    nodeMaster.inputMeasurable = data.inputMeasurable
    nodeMaster.outputMeasurable = data.outputMeasurable
    nodeMaster.percentage_rejects = data.percentage_rejects
    nodeMaster.date = data.date

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
    const nodeMaster = new NodeMaster();
    nodeMaster.id = data.id;
    nodeMaster.branchId = data.branchId;
    nodeMaster.nodeCategoryId = data.nodeCategoryId;
    nodeMaster.nodeCategory = data.nodeCategory;
    nodeMaster.nodeType = data.nodeType;
    nodeMaster.nodeName = data.nodeName;
    nodeMaster.itemDescription = data.itemDescription;
    nodeMaster.width = data.width;
    nodeMaster.height = data.height;
    nodeMaster.borderRadius = data.borderRadius;
    nodeMaster.xPosition = data.xPosition;
    nodeMaster.yPosition = data.yPosition;
    nodeMaster.borderColor = data.borderColor;
    nodeMaster.borderWidth = data.borderWidth;
    nodeMaster.borderStyle = data.borderStyle;
    nodeMaster.fillColor = data.fillColor;
    nodeMaster.fillTransparency = data.fillTransparency;
    nodeMaster.isRootNode = data.isRootNode;
    nodeMaster.isParent = data.isParent;
    nodeMaster.formula = data.formula;
    // nodeMaster.inputMaterialId = data.inputMaterialId;
    // nodeMaster.outputMaterialId = data.outputMaterialId;
    // nodeMaster.inputMaterialUnitId = data.inputMaterialUnitId;
    // nodeMaster.outputMaterialUnitId = data.outputMaterialUnitId;
    nodeMaster.fuelUsed = data.fuelUsed;
    nodeMaster.fuelUnitsId = data.fuelUnitsId;
    nodeMaster.capacity = data.capacity;
    nodeMaster.capacityUnitsId = data.capacityUnitsId;
    nodeMaster.sourcePosition = data.sourcePosition;
    nodeMaster.targetPosition = data.targetPosition;
    nodeMaster.FontColor = data.FontColor
    nodeMaster.FontStyle = data.FontStyle
    nodeMaster.FontSize = data.FontSize
    nodeMaster.userId = data.userId
    nodeMaster.units1 = data.units1
    nodeMaster.units2 = data.units2
    nodeMaster.unit1Measurable = data.unit1Measurable
    nodeMaster.unit2Mandatory = data.unit2Mandatory
    nodeMaster.allowExcessQty = data.allowExcessQty
    nodeMaster.type = data.type
    nodeMaster.parentNode = data.parentNode
    nodeMaster.iconId = data.iconId
    nodeMaster.nodeImage = data.nodeImage
    nodeMaster.extent = data.extent
    nodeMaster.inputMeasurable = data.inputMeasurable
    nodeMaster.outputMeasurable = data.outputMeasurable
    nodeMaster.percentage_rejects = data.percentage_rejects
    nodeMaster.date = data.date
    await nodeMaster.save();

    return nodeMaster
  } catch (error) {
    console.log(error)
    return error
  }
};

export const deleteNodeMaster = async (req: Request, res: Response) => {
  try {
    const nodeMaster = await NodeMaster.findOne(req.params.id);
    if (!nodeMaster) {
      return res.status(404).json({ error: 'nodeMaster not found' });
    }

    await nodeMaster.remove();
    return res.status(204).end();
  } catch (error) {
    return InternalServerError(res, error);
  }
};

export const nodeMasterById = async (req: Request, res: Response) => {
  try {
    const nodeMaster = await NodeMaster.findOne(req.params.id);
    if (!nodeMaster) {
      return res.status(404).json({ error: 'Node master not found' });
    }
    return res.json(nodeMaster);
  } catch (error) {
    return InternalServerError(res, error);
  }
};

