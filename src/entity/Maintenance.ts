import {
          BaseEntity,
          Column,
          Entity,
          PrimaryGeneratedColumn,
          CreateDateColumn
          
        } from "typeorm";
        
        @Entity()
        export class Maintenance extends BaseEntity {
        
          @PrimaryGeneratedColumn()
          Id: number;
        
          @Column()
          MaintenanceId: number;

          @Column()
          MachineId: string;

          @Column({nullable:true})
          Description: string;

          @Column()
          StartDate: string;

          @Column()
          EndDate: string;
        
          @Column()
          userId: string;
        
          @CreateDateColumn()
          DateTime: Date;
        }
        