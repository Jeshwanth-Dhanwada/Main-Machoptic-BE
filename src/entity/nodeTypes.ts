import {
          BaseEntity,
          Column,
          Entity,
          PrimaryGeneratedColumn,
          CreateDateColumn
        } from "typeorm";
        
@Entity()
export class NodeTypes extends BaseEntity {
@PrimaryGeneratedColumn()
nodeTypeId: number;

@Column()
Type: string;

@Column()
branchId: string;

@Column()
userId: string;

@CreateDateColumn()
DateTime: Date

}


        