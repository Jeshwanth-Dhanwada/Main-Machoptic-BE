import {
          BaseEntity,
          Column,
          Entity,
          PrimaryGeneratedColumn,
          CreateDateColumn
        } from "typeorm";
        
        @Entity()
        export class Devices extends BaseEntity {
          @PrimaryGeneratedColumn()
          deviceId: number;
        
          @Column()
          deviceName: string;

          @Column()
          branchId: string;

          @Column()
          userId: string;

          @CreateDateColumn()
          DateTime: Date;
        
        }
        