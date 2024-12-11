import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn
} from "typeorm";

@Entity()
export class UnitMaster extends BaseEntity {
  @PrimaryGeneratedColumn()
  unitId: number;

  @Column()
  branchId: string;

  @Column()
  unitDescription: string;

  @Column()
  conversionRate: string;

  @Column()
  refUnitId: string;

  @Column()
  userId: string;

  @CreateDateColumn()
  DateTime: Date

}
