import {
          BaseEntity,
          Column,
          Entity,
          PrimaryGeneratedColumn,
          CreateDateColumn
          
        } from "typeorm";
        
        @Entity()
        export class Agentsupplies extends BaseEntity {
        
          @PrimaryGeneratedColumn()
          Id: number;
        
          @Column()
          FullName: string;

          @Column()
          Address: string;

          @Column({nullable:true})
          Phone: string;

          @Column()
          Email: string;

          @Column()
          Notes: string;
        
          @Column()
          userId: string;
        
          @CreateDateColumn()
          DateTime: Date;
        }
        