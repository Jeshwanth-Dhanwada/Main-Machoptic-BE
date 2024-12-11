import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn
} from "typeorm";

@Entity()
export class MaterialType extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  // @Column()
  // materialTypeId: number;

  @Column()
  branchId: string;

  @Column()
  typeDescription: string;

  @Column()
  materialCategoryId: number;

  @Column()
  routeId: string;

  @Column()
  nodeId: string;

  @Column()
  specification: string;

  @Column()
  userId: string;

  @CreateDateColumn()
  DateTime: Date;


}
