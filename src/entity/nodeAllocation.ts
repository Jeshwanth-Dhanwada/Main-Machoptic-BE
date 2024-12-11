import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn
} from "typeorm";

@Entity()
export class NodeAllocation extends BaseEntity {
  @PrimaryGeneratedColumn()
  NodeAllocationId: number;

  @Column()
  branchId: string;

  @Column({ type: 'date', nullable: true }) // Use CreateDateColumn with type 'date'
  date: Date;

  @Column()
  shiftNumber: string;

  @Column()
  nodeId: string;

  @Column()
  empId: string;

  @Column()
  userId: string;

  @CreateDateColumn()
  DateTime: Date;

}
