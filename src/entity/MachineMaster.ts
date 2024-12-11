import {
          BaseEntity,
          Column,
          Entity,
          PrimaryGeneratedColumn,
          CreateDateColumn
        } from "typeorm";
        
        @Entity()
        export class MachineMaster extends BaseEntity {
          @PrimaryGeneratedColumn()
          Id: number;
        
          @Column()
          MachineId: number;

          @Column({nullable:true})
          capacity: string;
        
          @Column({nullable:true})
          capacityUnits: string;
        
          @Column({nullable:true})
          FuelConsumed: string;
        
          @Column({nullable:true})
          FuelUnits: string; 
        
          @Column({nullable:true})
          AllowAccessQuantity: string;
        
          @Column({nullable:true})
          PercentagesRejects: string;
        
          @Column()
          branchId: string;

          @Column()
          userId: string;
        
          @CreateDateColumn()
          DateTime: Date;
        
        }
        