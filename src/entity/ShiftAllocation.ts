import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  // CreateDateColumn
} from "typeorm";

@Entity()
export class ShiftAllocation extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  allocationId: number;

  @Column()
  branchId: string;

  @Column({nullable: true })
  date: Date;

  @Column()
  shift: string;

  @Column()
  nodeId: string;

  @Column()
  empId: string;

  // @Column()
  // userId: string;

  // @CreateDateColumn()
  // DateTime: Date


}
