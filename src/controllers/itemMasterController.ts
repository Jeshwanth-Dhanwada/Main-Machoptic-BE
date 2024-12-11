import { Request, Response } from "express";
import { InternalServerError } from "../response/InternalServerErrorResponse";
import * as Joi from "joi";
import { ItemMaster } from "../entity/itemMaster";

const ItemMasterSchema = Joi.object({
  IT_CODE:Joi.string().allow('', null),
  branchId: Joi.string().allow('', null),
  CO_CODE: Joi.string().allow('', null),
  IT_NAME: Joi.string().allow('', null),
  ALT_NAME: Joi.string().allow('', null),
  ItemType: Joi.string().allow('', null),
  NodeId: Joi.string().allow('', null),
  RouteId: Joi.string().allow('', null),
  Machine: Joi.string().allow('', null),
  image_mach: Joi.string().allow('', null),
  Production_Type: Joi.string().allow('', null),
  Production_section_ID: Joi.string().allow('', null),
  IG_CODE: Joi.string().allow('', null),
  ALT_UNIT: Joi.string().allow('', null),
  Otherchrage_Code: Joi.string().allow('', null),
  UR_Code: Joi.number().allow('', null),
  CUR_DATE: Joi.date().allow('', null),
  CUR_TIME: Joi.string().allow('', null),
  Item_status: Joi.string().allow('', null),
  Unit_Code: Joi.string().allow('', null),
  Tarrif_No_Code: Joi.string().allow('', null),
  Packing_Type_Code: Joi.string().allow('', null),
  SALT_RATE: Joi.string().allow('', null),
  Lead_Period: Joi.string().allow('', null),
  Reason: Joi.string().allow('', null),
  Normal: Joi.boolean().allow('', null),
  Size: Joi.string().allow('', null),
  Per_PackIng_Qty: Joi.string().allow('', null),
  Net_Weight: Joi.string().allow('', null),
  Tolerance: Joi.string().allow('', null),
  Old_Item_Code: Joi.string().allow('', null),
  Minimum: Joi.string().allow('', null),
  Stock_Effect: Joi.boolean().allow('', null),
  Cost: Joi.string().allow('', null),
  Minimum_Order_Qty: Joi.string().allow('', null),
  Storage_Location_ID: Joi.string().allow('', null),
  Ramco_Code: Joi.string().allow('', null),
  Service_Item: Joi.string().allow('', null),
  Consumable_HSN: Joi.string().allow('', null),
  Long_Desc: Joi.string().allow('', null),
  SP_PTNO: Joi.string().allow('', null),
  CUST_PTNO: Joi.string().allow('', null),
  PALT_RATE: Joi.string().allow('', null),
  UseQty_Alt: Joi.string().allow('', null),
  REOALT_QTY: Joi.string().allow('', null),
  Color_Value: Joi.string().allow('', null),
  Party_Name_ID: Joi.string().allow('', null),
  Refe_NO: Joi.string().allow('', null),
  BOM_Import_Yes_No: Joi.boolean().allow('', null),
  Import_Yes_No: Joi.string().allow('', null),
  Not_allow_fifo_Inpackingtick: Joi.boolean().allow('', null),
  Circumference_ID: Joi.string().allow('', null),
  Film_Type_ID: Joi.string().allow('', null),
  Liner_Type_ID: Joi.string().allow('', null),
  Gauge_ID: Joi.string().allow('', null),
  Width_ID: Joi.string().allow('', null),
  Color_ID: Joi.string().allow('', null),
  Denier_ID: Joi.string().allow('', null),
  Single_Double_Up: Joi.string().allow('', null),
  Handle: Joi.string().allow('', null),
  Handle_Type: Joi.string().allow('', null),
  Fabric_Type: Joi.string().allow('', null),
  Film_ID: Joi.string().allow('', null),
  Special_Remark: Joi.string().allow('', null),
  Party: Joi.string().allow('', null),
  No_of_colors: Joi.string().allow('', null),
  mtr_per_wgt: Joi.string().allow('', null),
  Film_Name_ID: Joi.string().allow('', null),
  Fabric_Name_ID: Joi.string().allow('', null),
  Per_Bag_wgt: Joi.string().allow('', null),
  Metalize_Film: Joi.boolean().allow('', null),
  userId: Joi.string().allow('', null),
  Route: Joi.string().allow('', null),
  percentageWaste: Joi.number().allow('', null),
  
  
});

export const createItemMaster = async (req: Request, res: Response) => {
  const { error } = ItemMasterSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  try {

    const itemmaster = new ItemMaster();
    itemmaster.IT_CODE = req.body.IT_CODE 
    itemmaster.branchId = req.body.branchId
    itemmaster.CO_CODE = req.body.CO_CODE
    itemmaster.IT_NAME = req.body.IT_NAME
    itemmaster.ALT_NAME = req.body.ALT_NAME 
    itemmaster.ItemType = req.body.ItemType 
    itemmaster.NodeId = req.body.NodeId 
    itemmaster.RouteId = req.body.RouteId 
    itemmaster.Machine = req.body.Machine 
    itemmaster.image_mach = req.body.image_mach 
    itemmaster.Production_Type = req.body.Production_Type
    itemmaster.IG_CODE = req.body.IG_CODE
    itemmaster.ALT_UNIT = req.body.ALT_UNIT
    itemmaster.Otherchrage_Code = req.body.Otherchrage_Code
    itemmaster.UR_Code = req.body.UR_Code
    itemmaster.CUR_DATE = req.body.CUR_DATE
    itemmaster.CUR_TIME = req.body.CUR_TIME
    itemmaster.Item_status = req.body.Item_status
    itemmaster.Unit_Code = req.body.Unit_Code
    itemmaster.Tarrif_No_Code = req.body.Tarrif_No_Code
    itemmaster.Packing_Type_Code = req.body.Packing_Type_Code
    itemmaster.SALT_RATE = req.body.SALT_RATE
    itemmaster.Lead_Period = req.body.Lead_Period
    itemmaster.Reason = req.body.Reason
    itemmaster.Normal = req.body.Normal
    itemmaster.Size = req.body.Size
    itemmaster.Per_PackIng_Qty = req.body.Per_PackIng_Qty
    itemmaster.Net_Weight = req.body.Net_Weight
    itemmaster.Tolerance = req.body.Tolerance
    itemmaster.Old_Item_Code = req.body.Old_Item_Code
    itemmaster.Minimum = req.body.Minimum
    itemmaster.Stock_Effect = req.body.Stock_Effect
    itemmaster.Cost = req.body.Cost
    itemmaster.Minimum_Order_Qty = req.body.Minimum_Order_Qty
    itemmaster.Storage_Location_ID = req.body.Storage_Location_ID
    itemmaster.Ramco_Code = req.body.Ramco_Code
    itemmaster.Service_Item = req.body.Service_Item
    itemmaster.Consumable_HSN = req.body.Consumable_HSN
    itemmaster.Long_Desc = req.body.Long_Desc
    itemmaster.SP_PTNO = req.body.SP_PTNO
    itemmaster.CUST_PTNO = req.body.CUST_PTNO
    itemmaster.PALT_RATE = req.body.PALT_RATE
    itemmaster.UseQty_Alt = req.body.UseQty_Alt
    itemmaster.REOALT_QTY = req.body.REOALT_QTY
    itemmaster.Color_Value = req.body.Color_Value
    itemmaster.Party_Name_ID = req.body.Party_Name_ID
    itemmaster.Refe_NO = req.body.Refe_NO
    itemmaster.BOM_Import_Yes_No = req.body.BOM_Import_Yes_No
    itemmaster.Import_Yes_No = req.body.Import_Yes_No
    itemmaster.Not_allow_fifo_Inpackingtick = req.body.Not_allow_fifo_Inpackingtick
    itemmaster.Circumference_ID = req.body.Circumference_ID
    itemmaster.Film_Type_ID = req.body.Film_Type_ID
    itemmaster.Liner_Type_ID = req.body.Liner_Type_ID
    itemmaster.Gauge_ID = req.body.Gauge_ID
    itemmaster.Width_ID = req.body.Width_ID
    itemmaster.Color_ID = req.body.Color_ID
    itemmaster.Denier_ID = req.body.Denier_ID
    itemmaster.Single_Double_Up = req.body.Single_Double_Up
    itemmaster.Handle = req.body.Handle
    itemmaster.Handle_Type = req.body.Handle_Type
    itemmaster.Fabric_Type = req.body.Fabric_Type
    itemmaster.Film_ID = req.body.Film_ID
    itemmaster.Special_Remark = req.body.Special_Remark
    itemmaster.Party = req.body.Party
    itemmaster.No_of_colors = req.body.No_of_colors
    itemmaster.mtr_per_wgt = req.body.mtr_per_wgt
    itemmaster.Film_Name_ID = req.body.Film_Name_ID
    itemmaster.Fabric_Name_ID = req.body.Fabric_Name_ID
    itemmaster.Per_Bag_wgt = req.body.Per_Bag_wgt
    itemmaster.Metalize_Film = req.body.Metalize_Film
    itemmaster.userId = req.body.userId
    itemmaster.Route = req.body.Route
    itemmaster.percentageWaste = req.body.percentageWaste

    
    await itemmaster.save();
    return res.status(201).json(itemmaster);
  } catch (error) {
    return InternalServerError(res, error);
  }
};

export const getAllItemMaster = async (_: Request, res: Response) => {
  try {
    const itemmaster = await ItemMaster.find();
    return res.json(itemmaster);
  } catch (error) {
    return InternalServerError(res, error);
  }
};

export const updateItemMaster = async (req: Request, res: Response) => {
  const { error } = ItemMasterSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  try {
    const itemmaster = await ItemMaster.findOne(req.params.id);
    console.log(itemmaster,"######");
    
    if (!itemmaster) {
      return res.status(404).json({ error: 'itemmaster not found' });
    }
    itemmaster.IT_CODE = req.body.IT_CODE 
    itemmaster.branchId = req.body.branchId
    itemmaster.CO_CODE = req.body.CO_CODE
    itemmaster.IT_NAME = req.body.IT_NAME
    itemmaster.ALT_NAME = req.body.ALT_NAME 
    itemmaster.ItemType = req.body.ItemType 
    itemmaster.NodeId = req.body.NodeId
    itemmaster.RouteId = req.body.RouteId
    itemmaster.Machine = req.body.Machine 
    itemmaster.image_mach = req.body.image_mach 
    itemmaster.Production_Type = req.body.Production_Type
    itemmaster.IG_CODE = req.body.IG_CODE
    itemmaster.ALT_UNIT = req.body.ALT_UNIT
    itemmaster.Otherchrage_Code = req.body.Otherchrage_Code
    itemmaster.UR_Code = req.body.UR_Code
    itemmaster.CUR_DATE = req.body.CUR_DATE
    itemmaster.CUR_TIME = req.body.CUR_TIME
    itemmaster.Item_status = req.body.Item_status
    itemmaster.Unit_Code = req.body.Unit_Code
    itemmaster.Tarrif_No_Code = req.body.Tarrif_No_Code
    itemmaster.Packing_Type_Code = req.body.Packing_Type_Code
    itemmaster.SALT_RATE = req.body.SALT_RATE
    itemmaster.Lead_Period = req.body.Lead_Period
    itemmaster.Reason = req.body.Reason
    itemmaster.Normal = req.body.Normal
    itemmaster.Size = req.body.Size
    itemmaster.Per_PackIng_Qty = req.body.Per_PackIng_Qty
    itemmaster.Net_Weight = req.body.Net_Weight
    itemmaster.Tolerance = req.body.Tolerance
    itemmaster.Old_Item_Code = req.body.Old_Item_Code
    itemmaster.Minimum = req.body.Minimum
    itemmaster.Stock_Effect = req.body.Stock_Effect
    itemmaster.Cost = req.body.Cost
    itemmaster.Minimum_Order_Qty = req.body.Minimum_Order_Qty
    itemmaster.Storage_Location_ID = req.body.Storage_Location_ID
    itemmaster.Ramco_Code = req.body.Ramco_Code
    itemmaster.Service_Item = req.body.Service_Item
    itemmaster.Consumable_HSN = req.body.Consumable_HSN
    itemmaster.Long_Desc = req.body.Long_Desc
    itemmaster.SP_PTNO = req.body.SP_PTNO
    itemmaster.CUST_PTNO = req.body.CUST_PTNO
    itemmaster.PALT_RATE = req.body.PALT_RATE
    itemmaster.UseQty_Alt = req.body.UseQty_Alt
    itemmaster.REOALT_QTY = req.body.REOALT_QTY
    itemmaster.Color_Value = req.body.Color_Value
    itemmaster.Party_Name_ID = req.body.Party_Name_ID
    itemmaster.Refe_NO = req.body.Refe_NO
    itemmaster.BOM_Import_Yes_No = req.body.BOM_Import_Yes_No
    itemmaster.Import_Yes_No = req.body.Import_Yes_No
    itemmaster.Not_allow_fifo_Inpackingtick = req.body.Not_allow_fifo_Inpackingtick
    itemmaster.Circumference_ID = req.body.Circumference_ID
    itemmaster.Film_Type_ID = req.body.Film_Type_ID
    itemmaster.Liner_Type_ID = req.body.Liner_Type_ID
    itemmaster.Gauge_ID = req.body.Gauge_ID
    itemmaster.Width_ID = req.body.Width_ID
    itemmaster.Color_ID = req.body.Color_ID
    itemmaster.Denier_ID = req.body.Denier_ID
    itemmaster.Single_Double_Up = req.body.Single_Double_Up
    itemmaster.Handle = req.body.Handle
    itemmaster.Handle_Type = req.body.Handle_Type
    itemmaster.Fabric_Type = req.body.Fabric_Type
    itemmaster.Film_ID = req.body.Film_ID
    itemmaster.Special_Remark = req.body.Special_Remark
    itemmaster.Party = req.body.Party
    itemmaster.No_of_colors = req.body.No_of_colors
    itemmaster.mtr_per_wgt = req.body.mtr_per_wgt
    itemmaster.Film_Name_ID = req.body.Film_Name_ID
    itemmaster.Fabric_Name_ID = req.body.Fabric_Name_ID
    itemmaster.Per_Bag_wgt = req.body.Per_Bag_wgt
    itemmaster.Metalize_Film = req.body.Metalize_Film
    itemmaster.userId = req.body.userId
    itemmaster.Route = req.body.Route
    itemmaster.percentageWaste = req.body.percentageWaste


    await itemmaster.save();
    return res.json(itemmaster);
  } catch (error) {
    return InternalServerError(res, error);
  }
};

export const updateBulkItemMaster = async (req: Request, res: Response) => {
console.log(123);
  if (req.body.itemmaster.length) {
    const itemMasterData = req.body.itemmaster

    let responseData: any = []

    for (let i = 0; i < itemMasterData.length; i++) {
      const element = itemMasterData[i];
      const { error } = ItemMasterSchema.validate(element);

      if (error) {
        return res.status(400).json({ error: error.details[0].message });
      }

    }

    try {

      for (let i = 0; i < itemMasterData.length; i++) {
        const element = itemMasterData[i];
        let itemMasterUpdateData:any;

        if(element.id){
          console.log("update");
          itemMasterUpdateData = await updateDataItemMaster(element)
        }

        else{
          itemMasterUpdateData = await createDataItemMaster(element)
          console.log("add");
        }

        responseData.push(itemMasterUpdateData);

      }
      return res.status(201).json(responseData);
    } catch (error) {
      return InternalServerError(res, error);
    }
  }

};

const updateDataItemMaster = async (data: any) => {
  const { error } = ItemMasterSchema.validate(data);

  if (error) {
    return { error: error.details[0].message }
  }

  try {
    const itemmaster = await ItemMaster.findOne(data.id);
    console.log(itemmaster,"$$$$$");
    
    if (!itemmaster) {
      return { error: error.details[0].message }
    }
    itemmaster.IT_CODE = data.IT_CODE 
    itemmaster.branchId = data.branchId
    itemmaster.CO_CODE = data.CO_CODE
    itemmaster.IT_NAME = data.IT_NAME
    itemmaster.ALT_NAME = data.ALT_NAME 
    itemmaster.ItemType = data.ItemType
    itemmaster.NodeId = data.NodeId
    itemmaster.RouteId = data.RouteId
    itemmaster.Machine = data.Machine 
    itemmaster.image_mach = data.image_mach 
    itemmaster.Production_Type = data.Production_Type
    itemmaster.IG_CODE = data.IG_CODE
    itemmaster.ALT_UNIT = data.ALT_UNIT
    itemmaster.Otherchrage_Code = data.Otherchrage_Code
    itemmaster.UR_Code = data.UR_Code
    itemmaster.CUR_DATE = data.CUR_DATE
    itemmaster.CUR_TIME = data.CUR_TIME
    itemmaster.Item_status = data.Item_status
    itemmaster.Unit_Code = data.Unit_Code
    itemmaster.Tarrif_No_Code = data.Tarrif_No_Code
    itemmaster.Packing_Type_Code = data.Packing_Type_Code
    itemmaster.SALT_RATE = data.SALT_RATE
    itemmaster.Lead_Period = data.Lead_Period
    itemmaster.Reason = data.Reason
    itemmaster.Normal = data.Normal
    itemmaster.Size = data.Size
    itemmaster.Per_PackIng_Qty = data.Per_PackIng_Qty
    itemmaster.Net_Weight = data.Net_Weight
    itemmaster.Tolerance = data.Tolerance
    itemmaster.Old_Item_Code = data.Old_Item_Code
    itemmaster.Minimum = data.Minimum
    itemmaster.Stock_Effect = data.Stock_Effect
    itemmaster.Cost = data.Cost
    itemmaster.Minimum_Order_Qty = data.Minimum_Order_Qty
    itemmaster.Storage_Location_ID = data.Storage_Location_ID
    itemmaster.Ramco_Code = data.Ramco_Code
    itemmaster.Service_Item = data.Service_Item
    itemmaster.Consumable_HSN = data.Consumable_HSN
    itemmaster.Long_Desc = data.Long_Desc
    itemmaster.SP_PTNO = data.SP_PTNO
    itemmaster.CUST_PTNO = data.CUST_PTNO
    itemmaster.PALT_RATE = data.PALT_RATE
    itemmaster.UseQty_Alt = data.UseQty_Alt
    itemmaster.REOALT_QTY = data.REOALT_QTY
    itemmaster.Color_Value = data.Color_Value
    itemmaster.Party_Name_ID = data.Party_Name_ID
    itemmaster.Refe_NO = data.Refe_NO
    itemmaster.BOM_Import_Yes_No = data.BOM_Import_Yes_No
    itemmaster.Import_Yes_No = data.Import_Yes_No
    itemmaster.Not_allow_fifo_Inpackingtick = data.Not_allow_fifo_Inpackingtick
    itemmaster.Circumference_ID = data.Circumference_ID
    itemmaster.Film_Type_ID = data.Film_Type_ID
    itemmaster.Liner_Type_ID = data.Liner_Type_ID
    itemmaster.Gauge_ID = data.Gauge_ID
    itemmaster.Width_ID = data.Width_ID
    itemmaster.Color_ID = data.Color_ID
    itemmaster.Denier_ID = data.Denier_ID
    itemmaster.Single_Double_Up = data.Single_Double_Up
    itemmaster.Handle = data.Handle
    itemmaster.Handle_Type = data.Handle_Type
    itemmaster.Fabric_Type = data.Fabric_Type
    itemmaster.Film_ID = data.Film_ID
    itemmaster.Special_Remark = data.Special_Remark
    itemmaster.Party = data.Party
    itemmaster.No_of_colors = data.No_of_colors
    itemmaster.mtr_per_wgt = data.mtr_per_wgt
    itemmaster.Film_Name_ID = data.Film_Name_ID
    itemmaster.Fabric_Name_ID = data.Fabric_Name_ID
    itemmaster.Per_Bag_wgt = data.Per_Bag_wgt
    itemmaster.Metalize_Film = data.Metalize_Film
    itemmaster.userId = data.userId
    itemmaster.Route = data.Route;
    itemmaster.percentageWaste = data.percentageWaste;

    await itemmaster.save();

    return itemmaster

  } catch (error) {
    return error
  }
};

const createDataItemMaster = async (data: any) => {
  const { error } = ItemMasterSchema.validate(data);

  if (error) {
    return { error: error.details[0].message }
  }

  try {

    const itemmaster = new ItemMaster();
    itemmaster.IT_CODE = data.IT_CODE 
    itemmaster.branchId = data.branchId
    itemmaster.CO_CODE = data.CO_CODE
    itemmaster.IT_NAME = data.IT_NAME
    itemmaster.ALT_NAME = data.ALT_NAME 
    itemmaster.ItemType = data.ItemType
    itemmaster.NodeId = data.NodeId
    itemmaster.RouteId = data.RouteId 
    itemmaster.Machine = data.Machine 
    itemmaster.image_mach = data.image_mach 
    itemmaster.Production_Type = data.Production_Type
    itemmaster.IG_CODE = data.IG_CODE
    itemmaster.ALT_UNIT = data.ALT_UNIT
    itemmaster.Otherchrage_Code = data.Otherchrage_Code
    itemmaster.UR_Code = data.UR_Code
    itemmaster.CUR_DATE = data.CUR_DATE
    itemmaster.CUR_TIME = data.CUR_TIME
    itemmaster.Item_status = data.Item_status
    itemmaster.Unit_Code = data.Unit_Code
    itemmaster.Tarrif_No_Code = data.Tarrif_No_Code
    itemmaster.Packing_Type_Code = data.Packing_Type_Code
    itemmaster.SALT_RATE = data.SALT_RATE
    itemmaster.Lead_Period = data.Lead_Period
    itemmaster.Reason = data.Reason
    itemmaster.Normal = data.Normal
    itemmaster.Size = data.Size
    itemmaster.Per_PackIng_Qty = data.Per_PackIng_Qty
    itemmaster.Net_Weight = data.Net_Weight
    itemmaster.Tolerance = data.Tolerance
    itemmaster.Old_Item_Code = data.Old_Item_Code
    itemmaster.Minimum = data.Minimum
    itemmaster.Stock_Effect = data.Stock_Effect
    itemmaster.Cost = data.Cost
    itemmaster.Minimum_Order_Qty = data.Minimum_Order_Qty
    itemmaster.Storage_Location_ID = data.Storage_Location_ID
    itemmaster.Ramco_Code = data.Ramco_Code
    itemmaster.Service_Item = data.Service_Item
    itemmaster.Consumable_HSN = data.Consumable_HSN
    itemmaster.Long_Desc = data.Long_Desc
    itemmaster.SP_PTNO = data.SP_PTNO
    itemmaster.CUST_PTNO = data.CUST_PTNO
    itemmaster.PALT_RATE = data.PALT_RATE
    itemmaster.UseQty_Alt = data.UseQty_Alt
    itemmaster.REOALT_QTY = data.REOALT_QTY
    itemmaster.Color_Value = data.Color_Value
    itemmaster.Party_Name_ID = data.Party_Name_ID
    itemmaster.Refe_NO = data.Refe_NO
    itemmaster.BOM_Import_Yes_No = data.BOM_Import_Yes_No
    itemmaster.Import_Yes_No = data.Import_Yes_No
    itemmaster.Not_allow_fifo_Inpackingtick = data.Not_allow_fifo_Inpackingtick
    itemmaster.Circumference_ID = data.Circumference_ID
    itemmaster.Film_Type_ID = data.Film_Type_ID
    itemmaster.Liner_Type_ID = data.Liner_Type_ID
    itemmaster.Gauge_ID = data.Gauge_ID
    itemmaster.Width_ID = data.Width_ID
    itemmaster.Color_ID = data.Color_ID
    itemmaster.Denier_ID = data.Denier_ID
    itemmaster.Single_Double_Up = data.Single_Double_Up
    itemmaster.Handle = data.Handle
    itemmaster.Handle_Type = data.Handle_Type
    itemmaster.Fabric_Type = data.Fabric_Type
    itemmaster.Film_ID = data.Film_ID
    itemmaster.Special_Remark = data.Special_Remark
    itemmaster.Party = data.Party
    itemmaster.No_of_colors = data.No_of_colors
    itemmaster.mtr_per_wgt = data.mtr_per_wgt
    itemmaster.Film_Name_ID = data.Film_Name_ID
    itemmaster.Fabric_Name_ID = data.Fabric_Name_ID
    itemmaster.Per_Bag_wgt = data.Per_Bag_wgt
    itemmaster.Metalize_Film = data.Metalize_Film
    itemmaster.userId = data.userId
    itemmaster.Route = data.Route;
    itemmaster.percentageWaste = data.percentageWaste;


    await itemmaster.save();

    return itemmaster
  } catch (error) {
    console.log(error)
    return error
  }
};

export const deleteItemMaster = async (req: Request, res: Response) => {
  try {
    const itemmaster = await ItemMaster.findOne(req.params.id);
    if (!itemmaster) {
      return res.status(404).json({ error: 'EmpType not found' });
    }

    await itemmaster.remove();
    return res.status(204).end();
  } catch (error) {
    return InternalServerError(res, error);
  }
};

export const ItemMasterById = async (req: Request, res: Response) => {
  try {
    const itemmaster = await ItemMaster.findOne(req.params.id);
    if (!itemmaster) {
      return res.status(404).json({ error: 'itemmaster not found' });
    }
    return res.json(itemmaster);
  } catch (error) {
    return InternalServerError(res, error);
  }
};