import {
          BaseEntity,
          Column,
          Entity,
          PrimaryGeneratedColumn,
          CreateDateColumn
        } from "typeorm";
        
        @Entity()
        export class MaterialMaster extends BaseEntity {
          @PrimaryGeneratedColumn()
          Id: number;
        
          @Column()
          MaterialId: number;

          @Column({nullable:true})
          ProducedQuntity: number;

          @Column({nullable:true})
          ProducingUnits: string;

          @Column({nullable:true})
          ConsumedQuantity: number;
        
          @Column({nullable:true})
          ConsumingUnits: string;

          @Column({nullable:true})
          BalanceQuantity: number;
        
          @Column({nullable:true})
          EquvalentFGUnits: string;
        
          @Column({nullable:true})
          ConversionRate: number;

          @Column({nullable:true})
          MeasurableUnits: string;
        
          @Column()
          branchId: string;

          @Column()
          userId: string;
        
          @CreateDateColumn()
          DateTime: Date;
        
        }
        