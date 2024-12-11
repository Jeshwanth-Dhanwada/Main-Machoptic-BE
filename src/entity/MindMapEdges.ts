import {
          BaseEntity,
          Column,
          Entity,
          // JoinColumn,
          // ManyToOne,
          PrimaryGeneratedColumn,
          CreateDateColumn
        } from "typeorm";
        // import { NodeMaster } from "./NodeMaster";
        
        @Entity()
        export class MindMapEdgeMaster extends BaseEntity {
          @PrimaryGeneratedColumn()
          edgeId: number;
        
          @Column()
          id: string;
        
          @Column()
          sourceId:string;
        
          @Column()
          targetId:string
        
          @Column()
          type:string
        
          @Column()
          arrow: boolean;
        
          @Column()
          strokeWidth:number
        
          @Column()
          stroke:string
        
        
          @Column({nullable:true})
          userId: string;
        
          @Column({nullable:true})
          modelid:number;
        
          @CreateDateColumn()
          DateTime: Date;
        
        }
        