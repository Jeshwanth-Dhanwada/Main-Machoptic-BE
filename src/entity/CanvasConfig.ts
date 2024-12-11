import {
          BaseEntity,
          Column,
          Entity,
          PrimaryGeneratedColumn,
          CreateDateColumn
        } from "typeorm";
        // import { EdgeMaster } from "./EdgeMaster";
        
        @Entity()
        export class CanvasConfig extends BaseEntity {
          @PrimaryGeneratedColumn()
          Id: number;
        
          @Column({nullable:true})
          BackgroundColor: string;
        
          @Column({nullable:true})
          Pattern: string;
          
          @Column({nullable:true})
          TextSize: number;
          
          @Column({nullable:true})
          FontStyle: string;
         
          @Column({nullable:true})
          userId: string;
        
          @CreateDateColumn()
          DateTime: Date
        
        }
        