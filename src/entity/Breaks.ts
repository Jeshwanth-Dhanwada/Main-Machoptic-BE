import {
          BaseEntity,
          Column,
          Entity,
          PrimaryGeneratedColumn,
          CreateDateColumn
        } from "typeorm";
        
        @Entity()
        export class Breaks extends BaseEntity {
        
          @PrimaryGeneratedColumn()
          Id: number;

          @Column()
          StartTime: Date;
        
          @Column()
          EndTime: Date;
        
          @Column()
          Working: string;
        
        }
        