import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  // CreateDateColumn
} from "typeorm";

@Entity()
export class CanvasMaster extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  canvasId: string;

  @Column()
  branchId: string;

  @Column()
  width: string;

  @Column()
  height: string;

  @Column()
  backgroundColor: string;

  @Column()
  xGridColor: string;

  @Column()
  xGridStyle: string;

  @Column()
  xGridThickness: string;

  @Column()
  xGridInterval: string;

  @Column()
  yGridColor: string;

  @Column()
  yGridStyle: string;

  @Column()
  yGridThickness: string;

  @Column()
  yGridInterval: string;

  @Column()
  process: string;

  // @Column()
  // userId: string;

  // @CreateDateColumn()
  // DateTime: Date;

}
