import {
          BaseEntity,
          Column,
          Entity,
          PrimaryGeneratedColumn,
          CreateDateColumn
        } from "typeorm";
        
        @Entity()
        export class Menus extends BaseEntity {
          @PrimaryGeneratedColumn()
          MenuId: number;
        
          @Column()
          Description: string;

          @Column({nullable:true})
          Url: string;

          @CreateDateColumn()
          DateTime: Date;
        
        }
        