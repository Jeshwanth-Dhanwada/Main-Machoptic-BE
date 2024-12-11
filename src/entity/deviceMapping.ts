import {
          BaseEntity,
          Column,
          Entity,
          PrimaryGeneratedColumn,
          CreateDateColumn
        } from "typeorm";
        
        @Entity()
        export class DeviceMapping extends BaseEntity {
          @PrimaryGeneratedColumn()
          Id: number;
        
          @Column()
          deviceId: string;

          @Column()
          nodeId: string;

          @Column()
          branchId: string;

          @Column()
          userId: string;

          @CreateDateColumn()
          DateTime: Date;
        
        }
        