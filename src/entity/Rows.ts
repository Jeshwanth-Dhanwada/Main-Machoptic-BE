import {
          BaseEntity,
          Column,
          Entity,
          PrimaryGeneratedColumn,
          CreateDateColumn
        } from "typeorm";
        
        @Entity()
        export class Row_Master extends BaseEntity {
        
          @PrimaryGeneratedColumn()
          RowId: number;

          @Column({nullable:true})
          id: string;

          @Column({nullable:true})
          iconClass: string;

          @Column({nullable:true})
          class: string;

          @Column({nullable:true})
          enableDragging: boolean;
        
          @Column({nullable:true})
          enableResize: boolean;
        
          @Column({nullable:true})
          label : string;

          @Column({nullable:true})
          children : string;

          @Column({nullable:true})
          expanded : boolean;

          @Column({ nullable: true })
          userId: string;

          @CreateDateColumn()
          DateTime: Date;
        
        }
        