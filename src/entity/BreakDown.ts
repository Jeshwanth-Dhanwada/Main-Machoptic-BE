import {
          BaseEntity,
          Column,
          Entity,
          PrimaryGeneratedColumn,
          CreateDateColumn
          
        } from "typeorm";
        
        @Entity()
        export class BreakDown extends BaseEntity {
        
          @PrimaryGeneratedColumn()
          Id: number;
        
          @Column()
          BreakDowneId: number;

          @Column()
          Reason: string;

          @Column({type:'date'})
          date: Date;

          @Column({nullable:true})
          Department: number;

          @Column()
          Equipment: string;
        
          @Column()
          userId: string;
        
          @CreateDateColumn()
          DateTime: Date;
        }
        