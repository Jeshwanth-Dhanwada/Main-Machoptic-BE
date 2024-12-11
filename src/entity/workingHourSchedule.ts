import {
          BaseEntity,
          Column,
          Entity,
          PrimaryGeneratedColumn,
          CreateDateColumn
        } from "typeorm";
        
        @Entity()
        export class WorkingHourSchedule extends BaseEntity {
        
          @PrimaryGeneratedColumn()
          Id: number;

          @Column()
          ShiftName: string;

          @Column({type:'time'})
          StartTime: Date;
        
          @Column({type:'time'})
          EndTime: Date;
        
          @Column()
          Working: string;
        
        }
        