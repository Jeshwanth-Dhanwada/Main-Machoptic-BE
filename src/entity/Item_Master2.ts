import {
          BaseEntity,
          Column,
          Entity,
          OneToMany,
          CreateDateColumn,
          PrimaryColumn,
        } from "typeorm";
        
        import { OA_DETMaster } from "./OA_DET";      
        
        @Entity()
        export class ItemMaster2 extends BaseEntity {
          @PrimaryColumn()
          IT_CODE: string;
        
          @Column({ nullable: true })
          branchId: string;
        
          @Column({ nullable: true })
          CO_CODE: string;
        
          @Column({ nullable: true })
          IT_NAME: string;
        
          @Column({ nullable: true })
          ALT_NAME: string;
        
          @Column({ nullable: true })
          ItemType: string;
        
          @Column({ nullable: true })
          NodeId: string;
        
          // @Column({ nullable: true })
          // RouteId: string;
        
          @Column({ nullable: true })
          Machine: string;
        
          @Column({ nullable: true })
          image_mach: string;
        
          @Column({ nullable: true })
          Production_Type: string;
        
          @Column({ nullable: true })
          Production_section_ID: string;
        
          @Column({ nullable: true })
          IG_CODE: string;
        
          @Column({ nullable: true })
          ALT_UNIT: string;
        
          @Column({ nullable: true })
          Otherchrage_Code: string;
        
          @Column({ nullable: true })
          UR_Code: number;
        
          @Column({ nullable: true })
          CUR_DATE: Date;
        
          @Column({ nullable: true })
          CUR_TIME: string;
          
          @Column({ nullable: true })
          Item_status: string;
        
          @Column({ nullable: true })
          Unit_Code: string;
        
          @Column({ nullable: true })
          Tarrif_No_Code: string;
        
          @Column({ nullable: true })
          Packing_Type_Code: string;
        
          @Column({ nullable: true })
          SALT_RATE: string;
        
          @Column({ nullable: true })
          Lead_Period: string;
        
          @Column({ nullable: true })
          Reason: string;
        
          @Column({ nullable: true })
          Normal: boolean;
        
          @Column({ nullable: true })
          Size: string;
        
          @Column({ nullable: true })
          Per_PackIng_Qty: string;
        
          @Column({ nullable: true })
          Net_Weight: string;
        
          @Column({ nullable: true })
          Tolerance: string;
        
          @Column({ nullable: true })
          Old_Item_Code: string;
        
          @Column({ nullable: true })
          Minimum: string;
        
          @Column({ nullable: true })
          Stock_Effect: boolean;
        
          @Column({ nullable: true })
          Cost: string;
        
          @Column({ nullable: true })
          Minimum_Order_Qty: string;
        
          @Column({ nullable: true })
          Storage_Location_ID: string;
        
          @Column({ nullable: true })
          Ramco_Code: string;
        
          @Column({ nullable: true })
          Service_Item: string;
        
          @Column({ nullable: true })
          Consumable_HSN: string;
        
          @Column({ nullable: true })
          Long_Desc: string;
        
          @Column({ nullable: true })
          SP_PTNO: string;
        
          @Column({ nullable: true })
          CUST_PTNO: string;
        
          @Column({ nullable: true })
          PALT_RATE: string;
        
          @Column({ nullable: true })
          UseQty_Alt: string;
        
          @Column({ nullable: true })
          REOALT_QTY: string;
        
          @Column({ nullable: true })
          Color_Value: string;
        
          @Column({ nullable: true })
          Party_Name_ID: string;
        
          @Column({ nullable: true })
          Refe_NO: string;
        
          @Column({ nullable: true })
          BOM_Import_Yes_No: boolean;
        
          @Column({ nullable: true })
          Import_Yes_No: string;
        
          @Column({ nullable: true })
          Not_allow_fifo_Inpackingtick: boolean;
        
          @Column({ nullable: true })
          Circumference_ID: string;
        
          @Column({ nullable: true })
          Film_Type_ID: string;
        
          @Column({ nullable: true })
          Liner_Type_ID: string;
        
          @Column({ nullable: true })
          Gauge_ID: string;
        
          @Column({ nullable: true })
          Width_ID: string;
        
          @Column({ nullable: true })
          Color_ID: string;
        
          @Column({ nullable: true })
          Denier_ID: string;
        
          @Column({ nullable: true })
          Single_Double_Up: string;
        
          @Column({ nullable: true })
          Handle: string;
        
          @Column({ nullable: true })
          Handle_Type: string;
        
          @Column({ nullable: true })
          Fabric_Type: string;
        
          @Column({ nullable: true })
          Film_ID: string;
        
          @Column({ nullable: true })
          Special_Remark: string;
        
          @Column({ nullable: true })
          Party: string;
        
          @Column({ nullable: true })
          No_of_colors: string;
        
          @Column({ nullable: true })
          mtr_per_wgt: string;
        
          @Column({ nullable: true })
          Film_Name_ID: string;
        
          @Column({ nullable: true })
          Fabric_Name_ID: string;
        
          @Column({ nullable: true })
          Per_Bag_wgt: string;
        
          @Column({ nullable: true })
          Metalize_Film: boolean;
        
          @Column({ nullable: true })
          userId: string;
        
          @Column({ nullable: true })
          Route: string;
        
          @CreateDateColumn()
          DateTime: Date;
        
           @OneToMany(()=> OA_DETMaster, (oa_detmaster) => oa_detmaster.itemmaster)
           oa_detmaster : OA_DETMaster[]
          
        }