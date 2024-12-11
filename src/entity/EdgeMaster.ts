import {
  BaseEntity,
  Column,
  Entity,
  // JoinColumn,
  // ManyToOne,
  PrimaryGeneratedColumn,
  CreateDateColumn
} from "typeorm";
// import { NodeMaster } from "./NodeMaster";

@Entity()
export class EdgeMaster extends BaseEntity {
  @PrimaryGeneratedColumn()
  edgeId: number;

  @Column()
  id: string;

  @Column()
  branchId: string;

  @Column()
  edgeDescription: string;

  @Column()
  routeId: string;

  @Column()
  sequenceId: string;

  // @ManyToOne(() => NodeMaster, (node) => node.sourceNodeId)
  // @JoinColumn({ name: "source_node_id" })
  // sourceNodeId: NodeMaster

  @Column()
  sourceNodeId: number

  @Column()
  sourceNodeType: string;

  @Column()
  targetNodeType: string;

  // @ManyToOne(() => NodeMaster, (node) => node.targetNodeId)
  // @JoinColumn({ name: "target_node_id" })
  // targetNodeId: NodeMaster
  @Column()
  targetNodeId: number;

  @Column()
  sourceId:string;

  @Column()
  targetId:string

  // @Column()
  // sourceNodeType: string;

  // @Column()
  // targetNodeType: string;

  @Column()
  unitsId: string;

  @Column()
  materialType: string;

  @Column()
  edgeStyle: string;

  @Column()
  edgeColor: string;

  @Column()
  edgeThickness: number;

  @Column()
  animation: boolean;

  @Column()
  arrow: boolean;

  // @Column()
  // Thickness: number;

  @Column()
  label: string;

  @Column({nullable:true})
  userId: string;

  @CreateDateColumn()
  DateTime: Date;

}
