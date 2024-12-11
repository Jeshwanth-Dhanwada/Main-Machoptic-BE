import {
          BaseEntity,
          Column,
          Entity,
          PrimaryGeneratedColumn,
          CreateDateColumn
        } from "typeorm";
        
          @Entity()
          export class MachineCategory extends BaseEntity {
        
          @PrimaryGeneratedColumn()
          CategoryId: number;
        
          @Column()
          CategoryDescription: string;

          @Column()
          branchId: string;
        
          @Column()
          userId: string;
        
          @CreateDateColumn()
          DateTime: Date;
        }
        