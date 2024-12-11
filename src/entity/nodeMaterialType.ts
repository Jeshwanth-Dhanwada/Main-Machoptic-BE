import {
          BaseEntity,
          Column,
          Entity,
          PrimaryGeneratedColumn,
          CreateDateColumn
          
        } from "typeorm";
        
        @Entity()
        export class MaterialNodeType extends BaseEntity {
        
          @PrimaryGeneratedColumn()
          materialId: number;
        
          @Column()
          materialName: string;

          @Column({nullable:true})
          materialCategoryId: string;

          @Column()
          branchId: string;
        
          @Column()
          userId: string;
        
          @CreateDateColumn()
          DateTime: Date;
        }
        