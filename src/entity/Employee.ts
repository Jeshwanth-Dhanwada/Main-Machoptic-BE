import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  CreateDateColumn
} from "typeorm";
// import { ActivityLog } from "./activitylog";
import { EmployeeNodeMapping } from "./EmployeeNodeMapping";
// import { Batch } from "./Batch";

@Entity()
export class Employee extends BaseEntity {

  @PrimaryGeneratedColumn()
  empId: number;

  @Column()
  branchId: string;

  @Column({nullable: true })
  empTypeId: string;

  @Column({nullable: true })
  employeeName: string;

  @Column({nullable: true })
  designation: string;

  @Column({nullable: true })
  grade: string;

  @Column({ type:'date',nullable: true, })
  dateOfJoining: Date;

  @Column({ type:'date', nullable: true })
  lastDate: string;

  @Column({default : true })
  isActive: boolean;

  @Column({nullable: true })
  userName: string;

  @Column({nullable: true })
  password: string;

  @Column({nullable: true })
  phoneno: string;

  // @OneToMany(() => ActivityLog, (activityLog) => activityLog.emp)
  // activitylog: ActivityLog[]

  // @OneToMany(() => Batch, (batch) => batch.emp)
  // batch: Batch[]

  @OneToMany(() => EmployeeNodeMapping, (empnodemap) => empnodemap.emp)
  empNodeMapping: EmployeeNodeMapping[]

  @Column()
  userId: string;

  @CreateDateColumn()
  DateTime: Date;

}
