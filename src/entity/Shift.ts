import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  // PrimaryGeneratedColumn,
  PrimaryColumn,
  // Timestamp,
  CreateDateColumn
} from "typeorm";
import { Jobs } from "./Job";
import { JobAssign } from "./JobAssign";
// import { ActivityLog } from "./activitylog";
import { Batch } from "./Batch";
// import { EmployeeNodeMapping } from "./EmployeeNodeMapping";

@Entity()
export class Shift extends BaseEntity {
  @Column({ generated: 'increment' })
  shiftId: number;

  @Column()
  branchId: string;

  @Column()
  shiftName: string;

  @PrimaryColumn()
  shiftNumber: string;

  @Column()
  startTime: string;

  @Column()
  endTime: string; 

  @OneToMany(() => Jobs, (job) => job.shift)
  job: Jobs[]

  @Column()
  userId: string;

  @Column({nullable:true})
  Working: string;

  @CreateDateColumn()
  DateTime: Date

  @OneToMany(() => JobAssign, (job) => job.shift)
  jobassign: JobAssign[]

  // @OneToMany(() => ActivityLog, (job) => job.shift)
  // activitylog: ActivityLog[]

  @OneToMany(() => Batch, (batch) => batch.shift)
  batch: Batch[]

  // @OneToMany(() => EmployeeNodeMapping, (batch) => batch.shift)
  // empNodeMapping: EmployeeNodeMapping[]
}
