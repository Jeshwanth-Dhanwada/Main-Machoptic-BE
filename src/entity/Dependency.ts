import {
          BaseEntity,
          Column,
          Entity,
          PrimaryGeneratedColumn,
          CreateDateColumn
        } from "typeorm";
        
        @Entity()
        export class Denpendency_Master extends BaseEntity {
        
          @PrimaryGeneratedColumn()
          Id: number;

          @Column({nullable:true})
          fromId : number;
        
          @Column({nullable:true})
          toId: number;
        
          @Column({nullable:true})
          stroke : string;

          @Column({nullable:true})
          strokeWidth: number;

          @Column({nullable:true})
          arrowSize: number; 

          @Column({ nullable: true })
          userId: string;

          @CreateDateColumn()
          DateTime: Date;
        
        }
        