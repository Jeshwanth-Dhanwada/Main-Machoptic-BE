import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  // OneToMany
} from "typeorm";
// import { ItemMaster } from "../entity/itemMaster";


@Entity()
export class RouteMaster extends BaseEntity {
  // @PrimaryGeneratedColumn()
  // id: number;

  @PrimaryGeneratedColumn()
  routeId: number;

  @Column()
  branchId: string;

  @Column()
  routeDescription: string;

  @Column()
  optional: string;

  @Column()
  productCategory: string;

  @Column()
  userId: string;

  @CreateDateColumn()
  DateTime: Date

  
  // @OneToMany(() => ItemMaster, (itemitcode) => itemitcode.itemitcode)
  // itemitcode: ItemMaster[]

}
