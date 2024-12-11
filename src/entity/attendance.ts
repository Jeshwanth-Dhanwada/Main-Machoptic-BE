import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn
} from "typeorm";

@Entity()
export class Attendance extends BaseEntity {

  @PrimaryGeneratedColumn()
  attendanceId: number;

  @Column()
  branchId: string;

  @Column({ type: 'date', nullable: true }) // Use CreateDateColumn with type 'date'
  date: Date;

  @Column()
  shiftId: string;

  @Column()
  empId: string;

  @Column()
  default: string;

  @Column()
  allocated: string;

  @Column()
  userId: string;

  @CreateDateColumn()
  DateTime: Date;

}
