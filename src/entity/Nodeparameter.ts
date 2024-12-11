import {
          BaseEntity,
          Column,
          Entity,
          PrimaryGeneratedColumn,
          CreateDateColumn
        } from "typeorm";
        
        @Entity()
        export class NodeParameter extends BaseEntity {
        
          @PrimaryGeneratedColumn()
          parameterId: number;

          @Column({nullable:true})
          branchId: number;

          @Column({nullable:true})
          nodeId: number;

          @Column({nullable:true})
          description: string;

          @Column({nullable:true})
          parameterValue: number;
        
          @Column({nullable:true})
          parameterMinValue: number;
        
          @Column({nullable:true})
          parameterMaxValue: number;

          @Column({nullable:true})
          parameterUnits: string;

          @Column({ nullable: true })
          userId: string;

          @CreateDateColumn()
          DateTime: Date;
        
        }
        