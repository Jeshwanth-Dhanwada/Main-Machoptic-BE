import {
          BaseEntity,
          Column,
          Entity,
          CreateDateColumn,
          ManyToOne,
          JoinColumn,
          PrimaryColumn,
          // PrimaryGeneratedColumn,
        } from "typeorm";
        import { ItemMaster } from "./itemMaster";
        
        @Entity()
        export class OA_DETMaster2 extends BaseEntity {
          @PrimaryColumn()
          Job_id: string;
        
          @Column({ nullable: true })
          CO_CODE: string;
        
          @Column({ nullable: true })
          OA_NO: string;
        
          @Column({ nullable: true })
          IT_CODE: string;
        
          @Column({ nullable: true })
          OA_SRNO: number;
        
          @Column({ nullable: true })
          Remarks: string;
        
          @Column({ nullable: true })
          fyear: string;
        
          @Column({ nullable: true })
          DB_CODE: string;
        
          @Column({ nullable: true })
          ALT_QTY: number;
        
          @Column({ nullable: true })
          Delivery_Date: Date;
        
          @Column('float', { nullable: true })
          ALT_RATE: number;
        
          @Column({ nullable: true })
          UR_CODE: number;
        
          @Column({ nullable: true })
          Final_Amt: number;
        
          @Column({ nullable: true })
          Location_Code: string;
        
          @Column({ nullable: true })
          Index: number;
        
          @Column({ nullable: true })
          URN_No: string;
        
          @Column({ nullable: true })
          OA_Status: string;
        
          @Column({ nullable: true })
          From_URN_No: string;
        
          @Column({ nullable: true })
          From_Item_Sr_No: string;
        
          @Column({ nullable: true })
          ALT_UNIT_ID: string;
        
          @Column({ nullable: true })
          Item_Long_Description: string;
        
          @Column({ nullable: true })
          reason: string;
        
          @Column({ nullable: true })
          Tolerance: number;
        
          @Column({ nullable: true })
          Close_Open_Status: boolean;
        
          @Column({ nullable: true })
          Close_Open_Reason: string;
        
          @Column({ nullable: true })
          Discount: string;
        
          @Column({ nullable: true })
          DIS_Amount: number;
        
          @Column({ nullable: true })
          InputAmount: string;
        
          @Column({ nullable: true })
          MRP: string;
        
          @Column({ nullable: true })
          Other_Unit_ID: string;
        
          @Column({ nullable: true })
          Other_Qty: string;
        
          @Column({ nullable: true })
          No_of_Color: string;
        
          @Column({ nullable: true })
          Film_Type: string;
        
          @Column({ nullable: true })
          Single_Double_up_Type: string;
        
          @Column({ nullable: true })
          Handle: string;
        
          @Column({ nullable: true })
          Handle_Type: string;
        
          @Column({ nullable: true })
          Bag_Size: string;
        
          @Column({ nullable: true })
          Liner: number;
        
          @Column({ nullable: true })
          Liner_Type: string;
        
          @Column({ nullable: true })
          Fabric_Type: string;
        
          @Column({ nullable: true })
          Color: string;
        
          @Column({ nullable: true })
          Special_Remark: string;
        
          @Column({ nullable: true })
          Circumfrence: number;
        
          @Column({ nullable: true })
          Film_Size: number;
        
          @Column({ nullable: true })
          Denier: number;
        
          @Column({ nullable: true })
          ALT_UNIT: string;
        
          @Column({ nullable: true })
          Production_type: string;
        
          @Column({ nullable: true })
          ProducedQty1: number
        
          @Column({ nullable: true })
          ProducedQty2: number
        
          @Column({ nullable: true })
          TargetQty: number;
        
          @Column({ nullable: true })
          Status: string;
        
          @ManyToOne(() => ItemMaster, (items) => items.IT_CODE)
          @JoinColumn({ name: "ItemCode" })
          itemmaster: ItemMaster
        
          @Column({ nullable: true })
          branchId: string;
        
          @Column({ nullable: true })
          userId: string;
        
          @CreateDateColumn()
          DateTime: Date;
        }
        
        