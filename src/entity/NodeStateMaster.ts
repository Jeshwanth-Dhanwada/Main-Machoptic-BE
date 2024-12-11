import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  // CreateDateColumn
} from "typeorm";

@Entity()
export class NodeStateMaster extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  stateId: number;

  @Column()
  branchId: string;

  @Column({nullable: true })
  dateTime: Date;

  @Column()
  shiftId: string;

  @Column()
  nodeId: string;

  @Column()
  state: string;

  // @Column()
  // userId: string;

  // @CreateDateColumn()
  // DateTime: Date


}
