import {
          BaseEntity,
          Column,
          Entity,
          PrimaryGeneratedColumn,
          CreateDateColumn
          
        } from "typeorm";
        
        @Entity()
        export class MachineType extends BaseEntity {
        
          @PrimaryGeneratedColumn()
          machineId: number;
        
          @Column()
          machineName: string;

          @Column({nullable:true})
          machineCategoryId: string;

          @Column()
          branchId: string;
        
          @Column()
          userId: string;
        
          @CreateDateColumn()
          DateTime: Date;
        }
        