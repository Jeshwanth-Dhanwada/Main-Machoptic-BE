import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn
} from "typeorm";

@Entity()
export class Branch extends BaseEntity {
  @PrimaryGeneratedColumn()
  branchId: number;

  @Column()
  orgId: string;

  @Column()
  branchName: string;

  @Column()
  location: string;

  @Column()
  address: string; 

  @Column()
  contactPerson: string;

  @Column()
  contactNumber: string;

  @Column()
  contactEmail: string;

  @Column()
  industry: string;

  @Column()
  userId: string;

  @CreateDateColumn()
  DateTime: Date;

}
