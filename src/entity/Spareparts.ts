import {
          BaseEntity,
          Column,
          Entity,
          PrimaryGeneratedColumn,
          CreateDateColumn
          
        } from "typeorm";
        
        @Entity()
        export class Spareparts extends BaseEntity {
        
          @PrimaryGeneratedColumn()
          Id: number;
        
          @Column({nullable:true})
          Code: string;

          @Column({nullable:true})
          Name: string;

          @Column({nullable:true})
          EquipmentCode: string;

          @Column({nullable:true})
          Amount: string;

          @Column({nullable:true})
          AgentId: string;

          @Column({nullable:true})
          photo: string;
        
          @Column()
          userId: string;
        
          @CreateDateColumn()
          DateTime: Date;
        }
        