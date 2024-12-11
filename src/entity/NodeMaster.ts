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
import { JobAssign } from "./JobAssign";
// import { Batch } from "./Batch";
import { EdgeMaster } from "./EdgeMaster";

@Entity()
export class NodeMaster extends BaseEntity {
  @PrimaryGeneratedColumn()
  nodeId: number;

  @Column()
  id: string;

  @Column()
  branchId: string;

  @Column({ nullable: true })
  nodeCategoryId: string;

  @Column({ nullable: true })
  nodeType: string;

  @Column({ nullable: true })
  nodeCategory: string;

  @Column()
  nodeName: string;

  @Column({ nullable: true })
  nodeImage: string;

  @Column({ nullable: true })
  itemDescription: string;

  @Column()
  width: string;

  @Column()
  height: string;

  // New Column 28-10-23 
  @Column({ nullable: true })
  borderRadius: string;

  @Column()
  xPosition: number;

  @Column()
  yPosition: number;

  @Column({ nullable: true })
  borderColor: string;

  @Column({ nullable: true })
  borderWidth: string;

  @Column({ nullable: true })
  borderStyle: string;

  @Column({ nullable: true })
  fillColor: string;

  @Column({ nullable: true })
  fillTransparency: string;

  @Column({ default: false })
  isRootNode: boolean;

  @Column({ default: false })
  isParent: boolean;

  @Column({ nullable: true })
  formula: string;

  @Column({ nullable: true })
  fuelUsed: string;

  @Column({ default: false })
  fuelUnitsId: string;

  @Column({ nullable: true })
  capacity: string;

  @Column({ default: false })
  capacityUnitsId: string;

  @Column({ nullable: true })
  sourcePosition: string;

  @Column({ nullable: true })
  targetPosition: string;

  @Column({ nullable: true })
  FontColor: string;

  @Column({ nullable: true })
  FontStyle: string;

  @Column({ nullable: true })
  FontSize: string;

  @Column({ nullable: true })
  units1: string;

  @Column({ nullable: true })
  units2: string;

  @Column({ nullable: true })
  unit1Measurable: string;

  @Column({ nullable: true })
  unit2Mandatory: string;

  @Column({ nullable: true })
  type: string;

  @Column({nullable: true })
  parentNode:string;

  @Column({nullable: true })
  extent:string;

  @Column({nullable: true })
  iconId:string;

  @Column({ nullable: true })
  allowExcessQty: string;

  @OneToMany(() => EmployeeNodeMapping, (empnodemap) => empnodemap.node)
  empNodeMapping: EmployeeNodeMapping[]

  @OneToMany(() => JobAssign, (jobassign) => jobassign.node)
  jobassign: NodeMaster[]

  @OneToMany(() => EdgeMaster, (edgemaster) => edgemaster.sourceNodeId)
  sourceNodeId: EdgeMaster[]

  @OneToMany(() => EdgeMaster, (edgemaster) => edgemaster.targetNodeId)
  targetNodeId: EdgeMaster[]

  @Column()
  userId: string;

  @Column({nullable:true})
  inputMeasurable: string;

  @Column({ nullable:true })
  outputMeasurable: string;

  @Column({ nullable:true })
  percentage_rejects: number;

  @Column({ type:'date',nullable:true })
  date: Date;

  @CreateDateColumn()
  DateTime: Date

}
