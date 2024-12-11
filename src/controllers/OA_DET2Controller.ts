// import { getRepository } from 'typeorm';
import { Request, Response } from "express";
import { InternalServerError } from "../response/InternalServerErrorResponse";
import * as Joi from "joi";
import { OA_DETMaster2 } from "../entity/OA_DET2";
// import { ItemMaster } from "../entity/itemMaster";


const OA_DET2Schema = Joi.object({
  Job_id: Joi.string(),
  branchId: Joi.string().allow('', null),
  CO_CODE: Joi.string().allow('', null),
  OA_NO: Joi.string().allow('', null),
  IT_CODE: Joi.string().allow('', null),
  OA_SRNO: Joi.number().allow('', null),
  Remarks: Joi.string().allow('', null),
  fyear: Joi.string().allow('', null),
  DB_CODE: Joi.string().allow('', null),
  ALT_QTY: Joi.number().allow('', null),
  Delivery_Date: Joi.date().allow('', null),
  ALT_RATE: Joi.number().allow('', null),
  UR_CODE: Joi.number().allow('', null),
  Final_Amt: Joi.number().allow('', null),
  Location_Code: Joi.string().allow('', null),
  Index: Joi.number().allow('', null),
  URN_No: Joi.string().allow('', null),
  OA_Status: Joi.string().allow('', null),
  From_URN_No: Joi.string().allow('', null),
  From_Item_Sr_No: Joi.string().allow('', null),
  ALT_UNIT_ID: Joi.string().allow('', null),
  Item_Long_Description: Joi.string().allow('', null),
  reason: Joi.string().allow('', null),
  Tolerance: Joi.number().allow('', null),
  Close_Open_Status: Joi.boolean().allow('', null),
  Close_Open_Reason: Joi.string().allow('', null),
  Discount: Joi.string().allow('', null),
  DIS_Amount: Joi.number().allow('', null),
  InputAmount: Joi.string().allow('', null),
  MRP: Joi.string().allow('', null),
  Other_Unit_ID: Joi.string().allow('', null),
  Other_Qty: Joi.string().allow('', null),
  No_of_Color: Joi.string().allow('', null),
  Film_Type: Joi.string().allow('', null),
  Single_Double_up_Type: Joi.string().allow('', null),
  Handle: Joi.string().allow('', null),
  Handle_Type: Joi.string().allow('', null),
  Bag_Size: Joi.string().allow('', null),
  Liner: Joi.number().allow('', null),
  Liner_Type: Joi.string().allow('', null),
  Fabric_Type: Joi.string().allow('', null),
  Color: Joi.string().allow('', null),
  Special_Remark: Joi.string().allow('', null),
  Circumfrence: Joi.number().allow('', null),
  Film_Size: Joi.number().allow('', null),
  Denier: Joi.number().allow('', null),
  ALT_UNIT: Joi.string().allow('', null),
  Production_type: Joi.string().allow('', null),
  userId: Joi.string().allow('', null),
  ProducedQty1: Joi.number().allow('', null),
  ProducedQty2: Joi.number().allow('', null),
  TargetQty: Joi.number().allow('', null),
  Status: Joi.string().allow('', null),
  // ItemMaster: Joi.string().required()
});

export const createOA_DETMaster2 = async (req: Request, res: Response) => {
  const { error } = OA_DET2Schema.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  try {

    const oadet2 = new OA_DETMaster2();
    oadet2.Job_id = req.body.Job_id;
    oadet2.branchId = req.body.branchId;
    oadet2.CO_CODE = req.body.CO_CODE
    oadet2.OA_NO = req.body.OA_NO
    oadet2.IT_CODE = req.body.IT_CODE
    oadet2.OA_SRNO = req.body.OA_SRNO
    oadet2.Remarks = req.body.Remarks
    oadet2.fyear = req.body.fyear
    oadet2.DB_CODE = req.body.DB_CODE
    oadet2.ALT_QTY = req.body.ALT_QTY
    oadet2.Delivery_Date = req.body.Delivery_Date
    oadet2.ALT_RATE = req.body.ALT_RATE
    oadet2.UR_CODE = req.body.UR_CODE
    oadet2.Final_Amt = req.body.Final_Amt
    oadet2.Location_Code = req.body.Location_Code
    oadet2.Index = req.body.Index
    oadet2.URN_No = req.body.URN_No
    oadet2.OA_Status = req.body.OA_Status
    oadet2.From_URN_No = req.body.From_URN_No
    oadet2.From_Item_Sr_No = req.body.From_Item_Sr_No
    oadet2.ALT_UNIT_ID = req.body.ALT_UNIT_ID
    oadet2.Item_Long_Description = req.body.Item_Long_Description
    oadet2.reason = req.body.reason
    oadet2.Tolerance = req.body.Tolerance
    oadet2.Close_Open_Status = req.body.Close_Open_Status
    oadet2.Close_Open_Reason = req.body.Close_Open_Reason
    oadet2.Discount = req.body.Discount
    oadet2.DIS_Amount = req.body.DIS_Amount
    oadet2.InputAmount = req.body.InputAmount
    oadet2.MRP = req.body.MRP
    oadet2.Other_Unit_ID = req.body.Other_Unit_ID
    oadet2.Other_Qty = req.body.Other_Qty
    oadet2.No_of_Color = req.body.No_of_Color
    oadet2.Film_Type = req.body.Film_Type
    oadet2.Single_Double_up_Type = req.body.Single_Double_up_Type
    oadet2.Handle = req.body.Handle
    oadet2.Handle_Type = req.body.Handle_Type
    oadet2.Bag_Size = req.body.Bag_Size
    oadet2.Liner = req.body.Liner
    oadet2.Liner_Type = req.body.Liner_Type
    oadet2.Fabric_Type = req.body.Fabric_Type
    oadet2.Color = req.body.Color
    oadet2.Special_Remark = req.body.Special_Remark
    oadet2.Circumfrence = req.body.Circumfrence
    oadet2.Film_Size = req.body.Film_Size
    oadet2.Denier = req.body.Denier
    oadet2.ALT_UNIT = req.body.ALT_UNIT
    oadet2.Production_type = req.body.Production_type
    oadet2.userId = req.body.userId
    oadet2.ProducedQty1 = req.body.ProducedQty1
    oadet2.ProducedQty2 = req.body.ProducedQty2
    oadet2.TargetQty = req.body.ALT_QTY * req.body.Circumfrence /1000
    oadet2.Status = req.body.Status
    await oadet2.save();
    return res.status(201).json(oadet2);
  } catch (error) {
    return InternalServerError(res, error);
  }
};

export const getAllQA_DET2 = async (_: Request, res: Response) => {
  // try {
  //   console.log("HELLOO")
  //   // const oaDetRepository = getRepository(OA_DETMaster);

  //   const oaDetails = await OA_DETMaster2.find();
  //   const itemMaster = await ItemMaster.find();

  //   // Create a Map for itemMaster using IT_CODE as the key
  //   const itemMasterMap = new Map(itemMaster.map(item => [item.IT_CODE, { IT_NAME: item.IT_NAME, ItemType: item.ItemType }]));

  //   const commonObjects = [];

  //   for (const oaDetail of oaDetails) {
  //     const itemData = itemMasterMap.get(oaDetail.IT_CODE);
  //     // const IT_CODE 

  //     if (itemData !== undefined) {
  //       const commonObject = {
  //         Job_id: oaDetail.Job_id,
  //         OA_Status: oaDetail.OA_Status,
  //         TargetQty: oaDetail.TargetQty,
  //         IT_CODE: oaDetail.IT_CODE,
  //         IT_NAME: itemData.IT_NAME,
  //         ItemType: itemData.ItemType,
  //         ALT_QTY: oaDetail.ALT_QTY,
  //         DateTime: oaDetail.DateTime,
  //         Film_Type: oaDetail.Film_Type,
  //         Status: oaDetail.Status,

  //       };
  //       commonObjects.push(commonObject);
  //     }
  //   }

  //   console.log('common>>', commonObjects);

  //   //console.log('common>>', commonObjects);
  //   //    console.log('common Object length', commonObjects.length)
  //   //  console.log('common>>',commonObjects);

  //   // console.log('oadetails',oaDetails)
  //   // console.log('itemMaster',itemMaster)
  //   //p const qadet = await OA_DETMaster.find( {relations: ['ItemMaster']});
  //   //p console.log(qadet,"@@@@@@@@@@@@@@@@@@@")
  //   // const qadet  = await OA_DETMaster.find()
  //   return res.json(commonObjects);
  // } catch (error) {
  //   return InternalServerError(res, error);
  // }

  try {
    const oadet2 = await OA_DETMaster2.find();
    return res.json(oadet2);
  }  catch (error) {
    return InternalServerError(res, error);
  }
};

/*

 const oaDetRepository = getRepository(OA_DETMaster);
    const qadet = await oaDetRepository
      .createQueryBuilder('oaDet') // 'oaDet' is an alias for OA_DETMaster
      .select(['oaDet.id', 'oaDet.name']) // Specify the columns you want
      .innerJoin('oaDet.otherEntity', 'otherEntity') // Join with OtherEntity
      .addSelect(['otherEntity.someField']) // Select specific columns from OtherEntity
      .getMany();


*/

export const updateOA_DETMaster2 = async (req: Request, res: Response) => {
  const { error } = OA_DET2Schema.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  try {
    const oadet2 = await OA_DETMaster2.findOne(req.params.id);
    if (!oadet2) {
      return res.status(404).json({ error: 'qadet2 not found' });
    }
    oadet2.Job_id = req.body.Job_id;
    oadet2.branchId = req.body.branchId;
    oadet2.CO_CODE = req.body.CO_CODE
    oadet2.OA_NO = req.body.OA_NO
    oadet2.IT_CODE = req.body.IT_CODE
    oadet2.OA_SRNO = req.body.OA_SRNO
    oadet2.Remarks = req.body.Remarks
    oadet2.fyear = req.body.fyear
    oadet2.DB_CODE = req.body.DB_CODE
    oadet2.ALT_QTY = req.body.ALT_QTY
    oadet2.Delivery_Date = req.body.Delivery_Date
    oadet2.ALT_RATE = req.body.ALT_RATE
    oadet2.UR_CODE = req.body.UR_CODE
    oadet2.Final_Amt = req.body.Final_Amt
    oadet2.Location_Code = req.body.Location_Code
    oadet2.Index = req.body.Index
    oadet2.URN_No = req.body.URN_No
    oadet2.OA_Status = req.body.OA_Status
    oadet2.From_URN_No = req.body.From_URN_No
    oadet2.From_Item_Sr_No = req.body.From_Item_Sr_No
    oadet2.ALT_UNIT_ID = req.body.ALT_UNIT_ID
    oadet2.Item_Long_Description = req.body.Item_Long_Description
    oadet2.reason = req.body.reason
    oadet2.Tolerance = req.body.Tolerance
    oadet2.Close_Open_Status = req.body.Close_Open_Status
    oadet2.Close_Open_Reason = req.body.Close_Open_Reason
    oadet2.Discount = req.body.Discount
    oadet2.DIS_Amount = req.body.DIS_Amount
    oadet2.InputAmount = req.body.InputAmount
    oadet2.MRP = req.body.MRP
    oadet2.Other_Unit_ID = req.body.Other_Unit_ID
    oadet2.Other_Qty = req.body.Other_Qty
    oadet2.No_of_Color = req.body.No_of_Color
    oadet2.Film_Type = req.body.Film_Type
    oadet2.Single_Double_up_Type = req.body.Single_Double_up_Type
    oadet2.Handle = req.body.Handle
    oadet2.Handle_Type = req.body.Handle_Type
    oadet2.Bag_Size = req.body.Bag_Size
    oadet2.Liner = req.body.Liner
    oadet2.Liner_Type = req.body.Liner_Type
    oadet2.Fabric_Type = req.body.Fabric_Type
    oadet2.Color = req.body.Color
    oadet2.Special_Remark = req.body.Special_Remark
    oadet2.Circumfrence = req.body.Circumfrence
    oadet2.Film_Size = req.body.Film_Size
    oadet2.Denier = req.body.Denier
    oadet2.ALT_UNIT = req.body.ALT_UNIT
    oadet2.Production_type = req.body.Production_type
    oadet2.userId = req.body.userId
    oadet2.ProducedQty1 = req.body.ProducedQty1
    oadet2.ProducedQty2 = req.body.ProducedQty2
    oadet2.TargetQty = req.body.ALT_QTY * req.body.Circumfrence / 1000
    oadet2.Status = req.body.Status

    await oadet2.save();
    return res.json(oadet2);
  } catch (error) {
    return InternalServerError(res, error);
  }
};

export const updateBulkOA_DETMaster2 = async (req: Request, res: Response) => {
  console.log(123);
  if (req.body.oadet2.length) {
    const OA_DET2MasterData = req.body.oadet2

    let responseData: any = []

    for (let i = 0; i < OA_DET2MasterData.length; i++) {
      const element = OA_DET2MasterData[i];
      const { error } = OA_DET2Schema.validate(element);

      if (error) {
        return res.status(400).json({ error: error.details[0].message });
      }

    }

    try {

      for (let i = 0; i < OA_DET2MasterData.length; i++) {
        const element = OA_DET2MasterData[i];
        let oa_det2UpdateData: any;

        if (element.id) {
          console.log("update");
          oa_det2UpdateData = await updateDataOA_DETMaster2(element)
        }

        else {
          oa_det2UpdateData = await createDataOA_DETMaster2(element)
          console.log("add");
        }

        responseData.push(oa_det2UpdateData);

      }
      return res.status(201).json(responseData);
    } catch (error) {
      return InternalServerError(res, error);
    }
  }

};

const updateDataOA_DETMaster2 = async (data: any) => {
  const { error } = OA_DET2Schema.validate(data);

  if (error) {
    return { error: error.details[0].message }
  }

  try {
    const oadet2 = await OA_DETMaster2.findOne(data.id);
    if (!oadet2) {
      return { error: error.details[0].message }
    }
    oadet2.Job_id = data.Job_id;
    oadet2.branchId = data.branchId;
    oadet2.CO_CODE = data.CO_CODE
    oadet2.OA_NO = data.OA_NO
    oadet2.IT_CODE = data.IT_CODE
    oadet2.OA_SRNO = data.OA_SRNO
    oadet2.Remarks = data.Remarks
    oadet2.fyear = data.fyear
    oadet2.DB_CODE = data.DB_CODE
    oadet2.ALT_QTY = data.ALT_QTY
    oadet2.Delivery_Date = data.Delivery_Date
    oadet2.ALT_RATE = data.ALT_RATE
    oadet2.UR_CODE = data.UR_CODE
    oadet2.Final_Amt = data.Final_Amt
    oadet2.Location_Code = data.Location_Code
    oadet2.Index = data.Index
    oadet2.URN_No = data.URN_No
    oadet2.OA_Status = data.OA_Status
    oadet2.From_URN_No = data.From_URN_No
    oadet2.From_Item_Sr_No = data.From_Item_Sr_No
    oadet2.ALT_UNIT_ID = data.ALT_UNIT_ID
    oadet2.Item_Long_Description = data.Item_Long_Description
    oadet2.reason = data.reason
    oadet2.Tolerance = data.Tolerance
    oadet2.Close_Open_Status = data.Close_Open_Status
    oadet2.Close_Open_Reason = data.Close_Open_Reason
    oadet2.Discount = data.Discount
    oadet2.DIS_Amount = data.DIS_Amount
    oadet2.InputAmount = data.InputAmount
    oadet2.MRP = data.MRP
    oadet2.Other_Unit_ID = data.Other_Unit_ID
    oadet2.Other_Qty = data.Other_Qty
    oadet2.No_of_Color = data.No_of_Color
    oadet2.Film_Type = data.Film_Type
    oadet2.Single_Double_up_Type = data.Single_Double_up_Type
    oadet2.Handle = data.Handle
    oadet2.Handle_Type = data.Handle_Type
    oadet2.Bag_Size = data.Bag_Size
    oadet2.Liner = data.Liner
    oadet2.Liner_Type = data.Liner_Type
    oadet2.Fabric_Type = data.Fabric_Type
    oadet2.Color = data.Color
    oadet2.Special_Remark = data.Special_Remark
    oadet2.Circumfrence = data.Circumfrence
    oadet2.Film_Size = data.Film_Size
    oadet2.Denier = data.Denier
    oadet2.ALT_UNIT = data.ALT_UNIT
    oadet2.Production_type = data.Production_type
    oadet2.userId = data.userId
    oadet2.ProducedQty1 = data.ProducedQty1
    oadet2.ProducedQty2 = data.ProducedQty2
    oadet2.TargetQty = data.ALT_QTY * data.Circumfrence / 1000
    oadet2.Status = data.Status
    await oadet2.save();

    return oadet2

  } catch (error) {
    return error
  }
};

const createDataOA_DETMaster2 = async (data: any) => {
  const { error } = OA_DET2Schema.validate(data);

  if (error) {
    return { error: error.details[0].message }
  }

  try {
    const oadet2 = new OA_DETMaster2();
    oadet2.Job_id = data.Job_id;
    oadet2.branchId = data.branchId;
    oadet2.CO_CODE = data.CO_CODE
    oadet2.OA_NO = data.OA_NO
    oadet2.IT_CODE = data.IT_CODE
    oadet2.OA_SRNO = data.OA_SRNO
    oadet2.Remarks = data.Remarks
    oadet2.fyear = data.fyear
    oadet2.DB_CODE = data.DB_CODE
    oadet2.ALT_QTY = data.ALT_QTY
    oadet2.Delivery_Date = data.Delivery_Date
    oadet2.ALT_RATE = data.ALT_RATE
    oadet2.UR_CODE = data.UR_CODE
    oadet2.Final_Amt = data.Final_Amt
    oadet2.Location_Code = data.Location_Code
    oadet2.Index = data.Index
    oadet2.URN_No = data.URN_No
    oadet2.OA_Status = data.OA_Status
    oadet2.From_URN_No = data.From_URN_No
    oadet2.From_Item_Sr_No = data.From_Item_Sr_No
    oadet2.ALT_UNIT_ID = data.ALT_UNIT_ID
    oadet2.Item_Long_Description = data.Item_Long_Description
    oadet2.reason = data.reason
    oadet2.Tolerance = data.Tolerance
    oadet2.Close_Open_Status = data.Close_Open_Status
    oadet2.Close_Open_Reason = data.Close_Open_Reason
    oadet2.Discount = data.Discount
    oadet2.DIS_Amount = data.DIS_Amount
    oadet2.InputAmount = data.InputAmount
    oadet2.MRP = data.MRP
    oadet2.Other_Unit_ID = data.Other_Unit_ID
    oadet2.Other_Qty = data.Other_Qty
    oadet2.No_of_Color = data.No_of_Color
    oadet2.Film_Type = data.Film_Type
    oadet2.Single_Double_up_Type = data.Single_Double_up_Type
    oadet2.Handle = data.Handle
    oadet2.Handle_Type = data.Handle_Type
    oadet2.Bag_Size = data.Bag_Size
    oadet2.Liner = data.Liner
    oadet2.Liner_Type = data.Liner_Type
    oadet2.Fabric_Type = data.Fabric_Type
    oadet2.Color = data.Color
    oadet2.Special_Remark = data.Special_Remark
    oadet2.Circumfrence = data.Circumfrence
    oadet2.Film_Size = data.Film_Size
    oadet2.Denier = data.Denier
    oadet2.ALT_UNIT = data.ALT_UNIT
    oadet2.Production_type = data.Production_type
    oadet2.userId = data.userId
    oadet2.ProducedQty1 = data.ProducedQty1
    oadet2.ProducedQty2 = data.ProducedQty2
    oadet2.TargetQty = data.ALT_QTY * data.Circumfrence/1000
    oadet2.Status = data.Status

    await oadet2.save();

    return oadet2
  } catch (error) {
    console.log(error)
    return error
  }
};

export const deleteOA_DETMaster2 = async (req: Request, res: Response) => {
  try {
    const qadet2 = await OA_DETMaster2.findOne(req.params.id);
    if (!qadet2) {
      return res.status(404).json({ error: 'qadet2 not found' });
    }

    await qadet2.remove();
    return res.status(204).end();
  } catch (error) {
    return InternalServerError(res, error);
  }
};

export const OA_DETMaster2ById = async (req: Request, res: Response) => {
  try {
    const qadet2 = await OA_DETMaster2.findOne(req.params.id);
    if (!qadet2) {
      return res.status(404).json({ error: 'qadet2 not found' });
    }
    return res.json(qadet2);
  } catch (error) {
    return InternalServerError(res, error);
  }
};



