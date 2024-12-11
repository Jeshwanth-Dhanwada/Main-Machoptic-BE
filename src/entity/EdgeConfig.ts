import {
          BaseEntity,
          Column,
          Entity,
          PrimaryGeneratedColumn,
          CreateDateColumn
        } from "typeorm";
        // import { EdgeMaster } from "./EdgeMaster";
        
        @Entity()
        export class EdgesConfig extends BaseEntity {
          @PrimaryGeneratedColumn()
          Id: number;
        
          @Column({nullable:true})
          EdgeColor: string;
        
          @Column({nullable:true})
          EdgeThickness: number;
          
          @Column({nullable:true})
          EdgeArrow: string;
          
          @Column({nullable:true})
          EdgeStyle: string;
          
          @Column({ nullable: true })
          EdgeAnimation: boolean;
          
          @Column({ nullable: true })
          EdgeShape: string;
        
          @Column({ nullable: true })
          EdgeTitle: string;
          
          @Column({ nullable: true })
          EdgeTitleSize: number;
        
          @Column({ nullable: true })
          EdgeTitleAglinment: string;
        
          @Column({ nullable: true })
          EdgeTitleColor: string;
        
          @Column({ nullable: true })
          EdgeTitleFontStyle: string;
        
          @Column({ nullable: true })
          EdgeTitlePosition: string;

          @Column({ nullable: true })
          EdgeType: string;
         
          @Column({nullable:true})
          userId: string;
        
          @CreateDateColumn()
          DateTime: Date
        
        }
        