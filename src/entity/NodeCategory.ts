import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn
} from "typeorm";

@Entity()
export class NodeCategory extends BaseEntity {
  @PrimaryGeneratedColumn()
  nodeCategoryId: number;

  // @Column()
  // nodeCategoryId: number;

  @Column()
  branchId: string;

  @Column()
  nodeType: string;

  @Column()
  nodeCategoryName: string;

  @Column()
  purpose: string;

  @Column()
  userId: string;

  @CreateDateColumn()
  DateTime: Date;


}
