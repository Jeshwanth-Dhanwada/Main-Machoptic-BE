import {
          BaseEntity,
          Column,
          Entity,
          PrimaryGeneratedColumn,
          CreateDateColumn
        } from "typeorm";
        // import { EdgeMaster } from "./EdgeMaster";
        
        @Entity()
        export class NodesConfig extends BaseEntity {
          @PrimaryGeneratedColumn()
          Id: number;
        
          @Column({nullable:true})
          width: string;
        
          @Column({nullable:true})
          height: string;
          
          @Column({nullable:true})
          borderRadius: number;
          
          @Column({nullable:true})
          borderColor: string;
          
          @Column({ nullable: true })
          borderThickness: number;
          
          @Column({ nullable: true })
          borderPattern: string;
        
          @Column({ nullable: true })
          nodeColor: string;
          
          @Column({ nullable: true })
          nodeLabel: string;
        
          @Column({ nullable: true })
          labelStyle: string;
        
          @Column({ nullable: true })
          labelSize: string;
        
          @Column({ nullable: true })
          labelPosition: string;
        
          @Column({ nullable: true })
          labelColor: string;
        
          @Column({ nullable: true })
          Collapse: boolean;

          @Column({nullable:true})
          userId: string;

          @Column({nullable:true})
          modelid: number;
        
          @CreateDateColumn()
          DateTime: Date
        
        }
        