import {
          BaseEntity,
          Column,
          Entity,
          PrimaryGeneratedColumn,
          CreateDateColumn
        } from "typeorm";
        
        @Entity()
        export class NodeVariable extends BaseEntity {
        
          @PrimaryGeneratedColumn()
          variableId: number;

          @Column({nullable:true})
          branchId: number;

          @Column({nullable:true})
          nodeId: number;

          @Column({nullable:true})
          description: string;

          @Column({nullable:true})
          variableValue: number;
        
          @Column({nullable:true})
          variableMinValue: number;
        
          @Column({nullable:true})
          variableMaxValue: number;

          @Column({nullable:true})
          variableUnits: string;

          @Column({ nullable: true })
          userId: string;

          @CreateDateColumn()
          DateTime: Date;
        
        }
        