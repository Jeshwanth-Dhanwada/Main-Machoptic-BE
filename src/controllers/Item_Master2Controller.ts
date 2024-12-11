import { Request, Response } from "express";
// import sql from 'mssql';
import { InternalServerError } from "../response/InternalServerErrorResponse";
import * as Joi from "joi";
import { ItemMaster2 } from "../entity/Item_Master2";

const ItemMasterSchema2 = Joi.object({
  IT_CODE: Joi.string().allow('', null),
  branchId: Joi.string().allow('', null),
  CO_CODE: Joi.string().allow('', null),
  IT_NAME: Joi.string().allow('', null),
  ALT_NAME: Joi.string().allow('', null),
  ItemType: Joi.string().allow('', null),
  NodeId: Joi.string().allow('', null),
  //   RouteId: Joi.string().allow('', null),
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
  Route: Joi.number().allow('', null),

});

export const createItemMaster2 = async (req: Request, res: Response) => {
  const { error } = ItemMasterSchema2.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  try {

    const itemmaster2 = new ItemMaster2();
    itemmaster2.IT_CODE = req.body.IT_CODE
    itemmaster2.branchId = req.body.branchId
    itemmaster2.CO_CODE = req.body.CO_CODE
    itemmaster2.IT_NAME = req.body.IT_NAME
    itemmaster2.ALT_NAME = req.body.ALT_NAME
    itemmaster2.ItemType = req.body.ItemType
    itemmaster2.NodeId = req.body.NodeId
    //     itemmaster2.RouteId = req.body.RouteId 
    itemmaster2.Machine = req.body.Machine
    itemmaster2.image_mach = req.body.image_mach
    itemmaster2.Production_Type = req.body.Production_Type
    itemmaster2.IG_CODE = req.body.IG_CODE
    itemmaster2.ALT_UNIT = req.body.ALT_UNIT
    itemmaster2.Otherchrage_Code = req.body.Otherchrage_Code
    itemmaster2.UR_Code = req.body.UR_Code
    itemmaster2.CUR_DATE = req.body.CUR_DATE
    itemmaster2.CUR_TIME = req.body.CUR_TIME
    itemmaster2.Item_status = req.body.Item_status
    itemmaster2.Unit_Code = req.body.Unit_Code
    itemmaster2.Tarrif_No_Code = req.body.Tarrif_No_Code
    itemmaster2.Packing_Type_Code = req.body.Packing_Type_Code
    itemmaster2.SALT_RATE = req.body.SALT_RATE
    itemmaster2.Lead_Period = req.body.Lead_Period
    itemmaster2.Reason = req.body.Reason
    itemmaster2.Normal = req.body.Normal
    itemmaster2.Size = req.body.Size
    itemmaster2.Per_PackIng_Qty = req.body.Per_PackIng_Qty
    itemmaster2.Net_Weight = req.body.Net_Weight
    itemmaster2.Tolerance = req.body.Tolerance
    itemmaster2.Old_Item_Code = req.body.Old_Item_Code
    itemmaster2.Minimum = req.body.Minimum
    itemmaster2.Stock_Effect = req.body.Stock_Effect
    itemmaster2.Cost = req.body.Cost
    itemmaster2.Minimum_Order_Qty = req.body.Minimum_Order_Qty
    itemmaster2.Storage_Location_ID = req.body.Storage_Location_ID
    itemmaster2.Ramco_Code = req.body.Ramco_Code
    itemmaster2.Service_Item = req.body.Service_Item
    itemmaster2.Consumable_HSN = req.body.Consumable_HSN
    itemmaster2.Long_Desc = req.body.Long_Desc
    itemmaster2.SP_PTNO = req.body.SP_PTNO
    itemmaster2.CUST_PTNO = req.body.CUST_PTNO
    itemmaster2.PALT_RATE = req.body.PALT_RATE
    itemmaster2.UseQty_Alt = req.body.UseQty_Alt
    itemmaster2.REOALT_QTY = req.body.REOALT_QTY
    itemmaster2.Color_Value = req.body.Color_Value
    itemmaster2.Party_Name_ID = req.body.Party_Name_ID
    itemmaster2.Refe_NO = req.body.Refe_NO
    itemmaster2.BOM_Import_Yes_No = req.body.BOM_Import_Yes_No
    itemmaster2.Import_Yes_No = req.body.Import_Yes_No
    itemmaster2.Not_allow_fifo_Inpackingtick = req.body.Not_allow_fifo_Inpackingtick
    itemmaster2.Circumference_ID = req.body.Circumference_ID
    itemmaster2.Film_Type_ID = req.body.Film_Type_ID
    itemmaster2.Liner_Type_ID = req.body.Liner_Type_ID
    itemmaster2.Gauge_ID = req.body.Gauge_ID
    itemmaster2.Width_ID = req.body.Width_ID
    itemmaster2.Color_ID = req.body.Color_ID
    itemmaster2.Denier_ID = req.body.Denier_ID
    itemmaster2.Single_Double_Up = req.body.Single_Double_Up
    itemmaster2.Handle = req.body.Handle
    itemmaster2.Handle_Type = req.body.Handle_Type
    itemmaster2.Fabric_Type = req.body.Fabric_Type
    itemmaster2.Film_ID = req.body.Film_ID
    itemmaster2.Special_Remark = req.body.Special_Remark
    itemmaster2.Party = req.body.Party
    itemmaster2.No_of_colors = req.body.No_of_colors
    itemmaster2.mtr_per_wgt = req.body.mtr_per_wgt
    itemmaster2.Film_Name_ID = req.body.Film_Name_ID
    itemmaster2.Fabric_Name_ID = req.body.Fabric_Name_ID
    itemmaster2.Per_Bag_wgt = req.body.Per_Bag_wgt
    itemmaster2.Metalize_Film = req.body.Metalize_Film
    itemmaster2.userId = req.body.userId
    itemmaster2.Route = req.body.Route


    await itemmaster2.save();
    return res.status(201).json(itemmaster2);
  } catch (error) {
    return InternalServerError(res, error);
  }
};

// export const getAllItemMaster2 = async (_: Request, res: Response) => {
//   const config = {
//     user: 'TaxonalyticaUser',
//     password: 'Taxonalytica123',
//     server: 'taxonalytica.cl77rwoetkdr.ap-south-1.rds.amazonaws.com',
//     database: 'Taxonanalytica',
//   };

//   try {
//     const pool = await new sql.ConnectionPool(config).connect()
//     const result = await pool.query`SELECT * FROM [Taxonanalytica].[dbo].[item_master2]`;

//     const itemmaster2 = result.recordset;

//     await pool.close();
//     console.log("Item_master", itemmaster2.length);
//     return res.json(itemmaster2);
//   } catch (error) {
//     return InternalServerError(res, error);
//   }
// };

export const getAllItemMaster2 = async (_: Request, res: Response) => {
  try {
    const itemmaster2 = await ItemMaster2.find();
    return res.json(itemmaster2);
  } catch (error) {
    return InternalServerError(res, error);
  }
};

export const updateItemMaster2 = async (req: Request, res: Response) => {
  const { error } = ItemMasterSchema2.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  try {
    const itemmaster2 = await ItemMaster2.findOne(req.params.id);
    console.log(itemmaster2, "######");

    if (!itemmaster2) {
      return res.status(404).json({ error: 'itemmaster not found' });
    }
    itemmaster2.IT_CODE = req.body.IT_CODE
    itemmaster2.branchId = req.body.branchId
    itemmaster2.CO_CODE = req.body.CO_CODE
    itemmaster2.IT_NAME = req.body.IT_NAME
    itemmaster2.ALT_NAME = req.body.ALT_NAME
    itemmaster2.ItemType = req.body.ItemType
    itemmaster2.NodeId = req.body.NodeId
    //     itemmaster2.RouteId = req.body.RouteId
    itemmaster2.Machine = req.body.Machine
    itemmaster2.image_mach = req.body.image_mach
    itemmaster2.Production_Type = req.body.Production_Type
    itemmaster2.IG_CODE = req.body.IG_CODE
    itemmaster2.ALT_UNIT = req.body.ALT_UNIT
    itemmaster2.Otherchrage_Code = req.body.Otherchrage_Code
    itemmaster2.UR_Code = req.body.UR_Code
    itemmaster2.CUR_DATE = req.body.CUR_DATE
    itemmaster2.CUR_TIME = req.body.CUR_TIME
    itemmaster2.Item_status = req.body.Item_status
    itemmaster2.Unit_Code = req.body.Unit_Code
    itemmaster2.Tarrif_No_Code = req.body.Tarrif_No_Code
    itemmaster2.Packing_Type_Code = req.body.Packing_Type_Code
    itemmaster2.SALT_RATE = req.body.SALT_RATE
    itemmaster2.Lead_Period = req.body.Lead_Period
    itemmaster2.Reason = req.body.Reason
    itemmaster2.Normal = req.body.Normal
    itemmaster2.Size = req.body.Size
    itemmaster2.Per_PackIng_Qty = req.body.Per_PackIng_Qty
    itemmaster2.Net_Weight = req.body.Net_Weight
    itemmaster2.Tolerance = req.body.Tolerance
    itemmaster2.Old_Item_Code = req.body.Old_Item_Code
    itemmaster2.Minimum = req.body.Minimum
    itemmaster2.Stock_Effect = req.body.Stock_Effect
    itemmaster2.Cost = req.body.Cost
    itemmaster2.Minimum_Order_Qty = req.body.Minimum_Order_Qty
    itemmaster2.Storage_Location_ID = req.body.Storage_Location_ID
    itemmaster2.Ramco_Code = req.body.Ramco_Code
    itemmaster2.Service_Item = req.body.Service_Item
    itemmaster2.Consumable_HSN = req.body.Consumable_HSN
    itemmaster2.Long_Desc = req.body.Long_Desc
    itemmaster2.SP_PTNO = req.body.SP_PTNO
    itemmaster2.CUST_PTNO = req.body.CUST_PTNO
    itemmaster2.PALT_RATE = req.body.PALT_RATE
    itemmaster2.UseQty_Alt = req.body.UseQty_Alt
    itemmaster2.REOALT_QTY = req.body.REOALT_QTY
    itemmaster2.Color_Value = req.body.Color_Value
    itemmaster2.Party_Name_ID = req.body.Party_Name_ID
    itemmaster2.Refe_NO = req.body.Refe_NO
    itemmaster2.BOM_Import_Yes_No = req.body.BOM_Import_Yes_No
    itemmaster2.Import_Yes_No = req.body.Import_Yes_No
    itemmaster2.Not_allow_fifo_Inpackingtick = req.body.Not_allow_fifo_Inpackingtick
    itemmaster2.Circumference_ID = req.body.Circumference_ID
    itemmaster2.Film_Type_ID = req.body.Film_Type_ID
    itemmaster2.Liner_Type_ID = req.body.Liner_Type_ID
    itemmaster2.Gauge_ID = req.body.Gauge_ID
    itemmaster2.Width_ID = req.body.Width_ID
    itemmaster2.Color_ID = req.body.Color_ID
    itemmaster2.Denier_ID = req.body.Denier_ID
    itemmaster2.Single_Double_Up = req.body.Single_Double_Up
    itemmaster2.Handle = req.body.Handle
    itemmaster2.Handle_Type = req.body.Handle_Type
    itemmaster2.Fabric_Type = req.body.Fabric_Type
    itemmaster2.Film_ID = req.body.Film_ID
    itemmaster2.Special_Remark = req.body.Special_Remark
    itemmaster2.Party = req.body.Party
    itemmaster2.No_of_colors = req.body.No_of_colors
    itemmaster2.mtr_per_wgt = req.body.mtr_per_wgt
    itemmaster2.Film_Name_ID = req.body.Film_Name_ID
    itemmaster2.Fabric_Name_ID = req.body.Fabric_Name_ID
    itemmaster2.Per_Bag_wgt = req.body.Per_Bag_wgt
    itemmaster2.Metalize_Film = req.body.Metalize_Film
    itemmaster2.userId = req.body.userId
    itemmaster2.Route = req.body.Route


    await itemmaster2.save();
    return res.json(itemmaster2);
  } catch (error) {
    return InternalServerError(res, error);
  }
};

export const updateBulkItemMaster2 = async (req: Request, res: Response) => {
  console.log(123);
  if (req.body.itemmaster2.length) {
    const itemMaster2Data = req.body.itemmaster2

    let responseData: any = []

    for (let i = 0; i < itemMaster2Data.length; i++) {
      const element = itemMaster2Data[i];
      const { error } = ItemMasterSchema2.validate(element);

      if (error) {
        return res.status(400).json({ error: error.details[0].message });
      }

    }

    try {

      for (let i = 0; i < itemMaster2Data.length; i++) {
        const element = itemMaster2Data[i];
        let itemMaster2UpdateData: any;

        if (element.id) {
          console.log("update");
          itemMaster2UpdateData = await updateDataItemMaster2(element)
        }

        else {
          itemMaster2UpdateData = await createDataItemMaster2(element)
          console.log("add");
        }

        responseData.push(itemMaster2UpdateData);

      }
      return res.status(201).json(responseData);
    } catch (error) {
      return InternalServerError(res, error);
    }
  }

};

const updateDataItemMaster2 = async (data: any) => {
  const { error } = ItemMasterSchema2.validate(data);

  if (error) {
    return { error: error.details[0].message }
  }

  try {
    const itemmaster2 = await ItemMaster2.findOne(data.id);
    console.log(itemmaster2, "$$$$$");

    if (!itemmaster2) {
      return { error: error.details[0].message }
    }
    itemmaster2.IT_CODE = data.IT_CODE
    itemmaster2.branchId = data.branchId
    itemmaster2.CO_CODE = data.CO_CODE
    itemmaster2.IT_NAME = data.IT_NAME
    itemmaster2.ALT_NAME = data.ALT_NAME
    itemmaster2.ItemType = data.ItemType
    itemmaster2.NodeId = data.NodeId
    //     itemmaster2.RouteId = data.RouteId
    itemmaster2.Machine = data.Machine
    itemmaster2.image_mach = data.image_mach
    itemmaster2.Production_Type = data.Production_Type
    itemmaster2.IG_CODE = data.IG_CODE
    itemmaster2.ALT_UNIT = data.ALT_UNIT
    itemmaster2.Otherchrage_Code = data.Otherchrage_Code
    itemmaster2.UR_Code = data.UR_Code
    itemmaster2.CUR_DATE = data.CUR_DATE
    itemmaster2.CUR_TIME = data.CUR_TIME
    itemmaster2.Item_status = data.Item_status
    itemmaster2.Unit_Code = data.Unit_Code
    itemmaster2.Tarrif_No_Code = data.Tarrif_No_Code
    itemmaster2.Packing_Type_Code = data.Packing_Type_Code
    itemmaster2.SALT_RATE = data.SALT_RATE
    itemmaster2.Lead_Period = data.Lead_Period
    itemmaster2.Reason = data.Reason
    itemmaster2.Normal = data.Normal
    itemmaster2.Size = data.Size
    itemmaster2.Per_PackIng_Qty = data.Per_PackIng_Qty
    itemmaster2.Net_Weight = data.Net_Weight
    itemmaster2.Tolerance = data.Tolerance
    itemmaster2.Old_Item_Code = data.Old_Item_Code
    itemmaster2.Minimum = data.Minimum
    itemmaster2.Stock_Effect = data.Stock_Effect
    itemmaster2.Cost = data.Cost
    itemmaster2.Minimum_Order_Qty = data.Minimum_Order_Qty
    itemmaster2.Storage_Location_ID = data.Storage_Location_ID
    itemmaster2.Ramco_Code = data.Ramco_Code
    itemmaster2.Service_Item = data.Service_Item
    itemmaster2.Consumable_HSN = data.Consumable_HSN
    itemmaster2.Long_Desc = data.Long_Desc
    itemmaster2.SP_PTNO = data.SP_PTNO
    itemmaster2.CUST_PTNO = data.CUST_PTNO
    itemmaster2.PALT_RATE = data.PALT_RATE
    itemmaster2.UseQty_Alt = data.UseQty_Alt
    itemmaster2.REOALT_QTY = data.REOALT_QTY
    itemmaster2.Color_Value = data.Color_Value
    itemmaster2.Party_Name_ID = data.Party_Name_ID
    itemmaster2.Refe_NO = data.Refe_NO
    itemmaster2.BOM_Import_Yes_No = data.BOM_Import_Yes_No
    itemmaster2.Import_Yes_No = data.Import_Yes_No
    itemmaster2.Not_allow_fifo_Inpackingtick = data.Not_allow_fifo_Inpackingtick
    itemmaster2.Circumference_ID = data.Circumference_ID
    itemmaster2.Film_Type_ID = data.Film_Type_ID
    itemmaster2.Liner_Type_ID = data.Liner_Type_ID
    itemmaster2.Gauge_ID = data.Gauge_ID
    itemmaster2.Width_ID = data.Width_ID
    itemmaster2.Color_ID = data.Color_ID
    itemmaster2.Denier_ID = data.Denier_ID
    itemmaster2.Single_Double_Up = data.Single_Double_Up
    itemmaster2.Handle = data.Handle
    itemmaster2.Handle_Type = data.Handle_Type
    itemmaster2.Fabric_Type = data.Fabric_Type
    itemmaster2.Film_ID = data.Film_ID
    itemmaster2.Special_Remark = data.Special_Remark
    itemmaster2.Party = data.Party
    itemmaster2.No_of_colors = data.No_of_colors
    itemmaster2.mtr_per_wgt = data.mtr_per_wgt
    itemmaster2.Film_Name_ID = data.Film_Name_ID
    itemmaster2.Fabric_Name_ID = data.Fabric_Name_ID
    itemmaster2.Per_Bag_wgt = data.Per_Bag_wgt
    itemmaster2.Metalize_Film = data.Metalize_Film
    itemmaster2.userId = data.userId
    itemmaster2.Route = data.Route;

    await itemmaster2.save();

    return itemmaster2

  } catch (error) {
    return error
  }
};

const createDataItemMaster2 = async (data: any) => {
  const { error } = ItemMasterSchema2.validate(data);

  if (error) {
    return { error: error.details[0].message }
  }

  try {

    const itemmaster2 = new ItemMaster2();
    itemmaster2.IT_CODE = data.IT_CODE
    itemmaster2.branchId = data.branchId
    itemmaster2.CO_CODE = data.CO_CODE
    itemmaster2.IT_NAME = data.IT_NAME
    itemmaster2.ALT_NAME = data.ALT_NAME
    itemmaster2.ItemType = data.ItemType
    itemmaster2.NodeId = data.NodeId
    //     itemmaster2.RouteId = data.RouteId 
    itemmaster2.Machine = data.Machine
    itemmaster2.image_mach = data.image_mach
    itemmaster2.Production_Type = data.Production_Type
    itemmaster2.IG_CODE = data.IG_CODE
    itemmaster2.ALT_UNIT = data.ALT_UNIT
    itemmaster2.Otherchrage_Code = data.Otherchrage_Code
    itemmaster2.UR_Code = data.UR_Code
    itemmaster2.CUR_DATE = data.CUR_DATE
    itemmaster2.CUR_TIME = data.CUR_TIME
    itemmaster2.Item_status = data.Item_status
    itemmaster2.Unit_Code = data.Unit_Code
    itemmaster2.Tarrif_No_Code = data.Tarrif_No_Code
    itemmaster2.Packing_Type_Code = data.Packing_Type_Code
    itemmaster2.SALT_RATE = data.SALT_RATE
    itemmaster2.Lead_Period = data.Lead_Period
    itemmaster2.Reason = data.Reason
    itemmaster2.Normal = data.Normal
    itemmaster2.Size = data.Size
    itemmaster2.Per_PackIng_Qty = data.Per_PackIng_Qty
    itemmaster2.Net_Weight = data.Net_Weight
    itemmaster2.Tolerance = data.Tolerance
    itemmaster2.Old_Item_Code = data.Old_Item_Code
    itemmaster2.Minimum = data.Minimum
    itemmaster2.Stock_Effect = data.Stock_Effect
    itemmaster2.Cost = data.Cost
    itemmaster2.Minimum_Order_Qty = data.Minimum_Order_Qty
    itemmaster2.Storage_Location_ID = data.Storage_Location_ID
    itemmaster2.Ramco_Code = data.Ramco_Code
    itemmaster2.Service_Item = data.Service_Item
    itemmaster2.Consumable_HSN = data.Consumable_HSN
    itemmaster2.Long_Desc = data.Long_Desc
    itemmaster2.SP_PTNO = data.SP_PTNO
    itemmaster2.CUST_PTNO = data.CUST_PTNO
    itemmaster2.PALT_RATE = data.PALT_RATE
    itemmaster2.UseQty_Alt = data.UseQty_Alt
    itemmaster2.REOALT_QTY = data.REOALT_QTY
    itemmaster2.Color_Value = data.Color_Value
    itemmaster2.Party_Name_ID = data.Party_Name_ID
    itemmaster2.Refe_NO = data.Refe_NO
    itemmaster2.BOM_Import_Yes_No = data.BOM_Import_Yes_No
    itemmaster2.Import_Yes_No = data.Import_Yes_No
    itemmaster2.Not_allow_fifo_Inpackingtick = data.Not_allow_fifo_Inpackingtick
    itemmaster2.Circumference_ID = data.Circumference_ID
    itemmaster2.Film_Type_ID = data.Film_Type_ID
    itemmaster2.Liner_Type_ID = data.Liner_Type_ID
    itemmaster2.Gauge_ID = data.Gauge_ID
    itemmaster2.Width_ID = data.Width_ID
    itemmaster2.Color_ID = data.Color_ID
    itemmaster2.Denier_ID = data.Denier_ID
    itemmaster2.Single_Double_Up = data.Single_Double_Up
    itemmaster2.Handle = data.Handle
    itemmaster2.Handle_Type = data.Handle_Type
    itemmaster2.Fabric_Type = data.Fabric_Type
    itemmaster2.Film_ID = data.Film_ID
    itemmaster2.Special_Remark = data.Special_Remark
    itemmaster2.Party = data.Party
    itemmaster2.No_of_colors = data.No_of_colors
    itemmaster2.mtr_per_wgt = data.mtr_per_wgt
    itemmaster2.Film_Name_ID = data.Film_Name_ID
    itemmaster2.Fabric_Name_ID = data.Fabric_Name_ID
    itemmaster2.Per_Bag_wgt = data.Per_Bag_wgt
    itemmaster2.Metalize_Film = data.Metalize_Film
    itemmaster2.userId = data.userId
    itemmaster2.Route = data.Route;


    await itemmaster2.save();

    return itemmaster2
  } catch (error) {
    console.log(error)
    return error
  }
};

export const deleteItemMaster2 = async (req: Request, res: Response) => {
  try {
    const itemmaster2 = await ItemMaster2.findOne(req.params.id);
    if (!itemmaster2) {
      return res.status(404).json({ error: 'EmpType not found' });
    }

    await itemmaster2.remove();
    return res.status(204).end();
  } catch (error) {
    return InternalServerError(res, error);
  }
};

export const ItemMaster2ById = async (req: Request, res: Response) => {
  try {
    const itemmaster2 = await ItemMaster2.findOne(req.params.id);
    if (!itemmaster2) {
      return res.status(404).json({ error: 'itemmaster not found' });
    }
    return res.json(itemmaster2);
  } catch (error) {
    return InternalServerError(res, error);
  }
};