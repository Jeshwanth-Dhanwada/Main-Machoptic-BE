import {
          BaseEntity,
          Column,
          Entity,
          PrimaryGeneratedColumn,
          CreateDateColumn
          
        } from "typeorm";
        
        @Entity()
        export class NodeMaterialspecification extends BaseEntity {
        
          @PrimaryGeneratedColumn()
          specificationId: number;
        
          @Column({nullable:true})
          nodeId: number;

          @Column({nullable:true})
          Value: number;

          @Column({nullable:true})
          ActivityId: number;
        
          @Column()
          userId: string;
        
          @CreateDateColumn()
          DateTime: Date;
        }
        