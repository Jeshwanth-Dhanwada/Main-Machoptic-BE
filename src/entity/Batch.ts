import {
  BaseEntity,
  Column,
  Entity,
  // JoinColumn,
  // ManyToOne,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from "typeorm";
// import { NodeMaster } from "./NodeMaster";
// import { Employee } from "./Employee";
// import { Shift } from "./Shift";
// import { ActivityLog } from "./activitylog";
// import { Jobs } from "./Job";

@Entity()
export class Batch extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  branchId: string;

  @Column({ type: 'nvarchar', nullable: true })
  activityId: string;

  @Column({ nullable: true })
  consumedActivityId: string;

  @Column({ nullable: true })
  shift: string;

  @Column({ nullable: true })
  date: Date;

  @Column({ nullable: true })
  MachinenodeId: string;

  @Column({ nullable: true })
  jobId: string;

  @Column({ nullable: true })
  FGID: string;

  @Column({ nullable: true })
  ItemCode: string;

  @Column({ nullable: true })
  MaterialId: string;

  @Column({ nullable: true })
  units1: number;

  @Column('float', { nullable: true })
  Availablequantity1: number;

  @Column('float', { nullable: true })
  Consumedquantity1: number;

  @Column('float', { nullable: true })
  Balancequantity1: number;

  @Column({ nullable: true })
  units2: number;

  @Column('float', { nullable: true })
  Availablequantity2: number;

  @Column('float', { nullable: true })
  Consumedquantity2: number;

  @Column('float', { nullable: true })
  Balancequantity2: number;

  @Column({ nullable: true })
  userId: string;

  @CreateDateColumn()
  DateTime: Date;

  // @ManyToOne(() => Employee, (emp) => emp.batch)
  // @JoinColumn({ name: "emp_id" })
  // emp: Employee

  // @ManyToOne(() => NodeMaster, (node) => node.machineNode)
  // @JoinColumn({ name: "machine_node_id" })
  // machineNode: NodeMaster

  // @ManyToOne(() => NodeMaster, (node) => node.materialNode)
  // @JoinColumn({ name: "materail_node_id" })
  // materialNode: NodeMaster

  // @ManyToOne(() => ActivityLog, (activitylog) => activitylog.batch)
  // @JoinColumn({ name: "activity_log_id" })
  // activitylog: ActivityLog

  // @Column()
  // date: Date;

  // @ManyToOne(() => Shift, (shift) => shift.batch)
  // @JoinColumn({ name: "shift_id" })
  // shift: Shift

  // @ManyToOne(() => Jobs, (job) => job.batch)
  // @JoinColumn({ name: "job_id" })
  // job: Jobs

}
