import {
          BaseEntity,
          Column,
          Entity,
          PrimaryGeneratedColumn,
          CreateDateColumn
        } from "typeorm";
        
        @Entity()
        export class Tasks_Master extends BaseEntity {
        
          @PrimaryGeneratedColumn()
          TaskId: number;

          @Column({nullable:true})
          id: string;

          @Column({nullable:true})
          amountDone: number;

          @Column({nullable:true})
          resourceId: string;

          @Column({nullable:true})
          OperationType: string;
        
          @Column({nullable:true})
          from: string;
        
          @Column({nullable:true})
          to: string;

          @Column({nullable:true})
          label: string;

          @Column({nullable:true})
          classes: string;

          @Column({nullable:true})
          enableDragging: boolean;

          @Column({nullable:true})
          enableResize: boolean;

          @Column({ nullable: true })
          userId: string;

          @CreateDateColumn()
          DateTime: Date;
        
        }
        