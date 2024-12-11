import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn
} from "typeorm";

@Entity()
export class Emptype extends BaseEntity {
  @PrimaryGeneratedColumn()
  empTypeId: number;

  @Column()
  branchId: string;

  @Column()
  empType: string;

  @Column()
  userId: string;

  @CreateDateColumn()
  DateTime: Date;


}
