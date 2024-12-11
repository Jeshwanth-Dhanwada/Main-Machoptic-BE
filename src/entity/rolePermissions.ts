import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn
} from "typeorm";

@Entity()
export class rolePermissions extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  branchId: string;

  @Column()
  menuId: string;

  @Column()
  roleId: string;

  @Column()
  access_all: boolean;

  @Column()
  create: boolean;

  @Column()
  read: boolean;

  @Column()
  update: boolean;

  @Column()
  delete: boolean;

  @Column()
  userId: string;

  @Column({ nullable: true })
  key: string;

  @CreateDateColumn()
  DateTime: Date;

}
