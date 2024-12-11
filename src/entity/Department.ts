import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn
} from "typeorm";

@Entity()
export class Department extends BaseEntity {
  @PrimaryGeneratedColumn()
  deptId: number;

  @Column()
  branchId: string;

  @Column()
  deptName: string;

  @Column()
  userId: string;

  @CreateDateColumn()
  DateTime: Date;

}
