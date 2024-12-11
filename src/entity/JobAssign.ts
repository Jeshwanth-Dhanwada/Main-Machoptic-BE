import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  CreateDateColumn,
  PrimaryGeneratedColumn,
} from "typeorm";
import { NodeMaster } from "./NodeMaster";
// import { Jobs } from "./Job";
import { Shift } from "./Shift";

@Entity()
export class JobAssign extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  branchId: string;

  @Column({ type: 'date', nullable: true }) // Use CreateDateColumn with type 'date'
  date: Date;

  @Column()
  routeId: string;

  @Column({nullable:true})
  priority: string;

  @Column()
  status: string;

  @Column()
  jobId: string;

  @Column({ nullable: true })
  totalProducedQty: number;

  @Column({ nullable: true })
  outstandingQty: number;

  @Column({ nullable: true })
  targetQty: number;

  @ManyToOne(() => NodeMaster, (node) => node.jobassign)
  @JoinColumn({ name: "node_id" })
  node: NodeMaster

  // @ManyToOne(() => Jobs, (node) => node.jobassign)
  // @JoinColumn({ name: "job_id" })
  // job: Jobs

  @ManyToOne(() => Shift, (shift) => shift.jobassign)
  @JoinColumn({ name: "shift_id" })
  shift: Shift

  @Column()
  userId: string;

  @CreateDateColumn()
  DateTime: Date;

}

