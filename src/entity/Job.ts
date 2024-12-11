import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  // OneToMany,
  CreateDateColumn,
  PrimaryGeneratedColumn,
} from "typeorm";
// import { JobAssign } from "./JobAssign";
import { Shift } from "./Shift";
// import { Batch } from "./Batch";
// import { ActivityLog } from "./activitylog";

@Entity()
export class Jobs extends BaseEntity {

  @PrimaryGeneratedColumn()
  jobId: number;

  @Column()
  branchId: string;

  @Column()
  date: string;

  // @Column()
  // shiftId: string;

  @Column()
  duration: string;

  // @OneToMany(() => JobAssign, (jobassign) => jobassign.job)
  // jobassign: JobAssign[]

  @ManyToOne(() => Shift, (shift) => shift.job)
  @JoinColumn({ name: "shift_id" })
  shift: Shift

  // @OneToMany(() => Batch, (batch) => batch.job)
  // batch: Batch[]

  // @OneToMany(() => ActivityLog, (activityLog) => activityLog.job)
  // activitylog: ActivityLog[]

  @Column()
  jobDescription: string;

  // @Column()
  // shiftId: string;

  @Column()
  shiftName: string;

  @Column()
  userId: string;

  @CreateDateColumn()
  DateTime: Date;

}
        
