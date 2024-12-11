import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn
} from "typeorm";

@Entity()
export class Section extends BaseEntity {


  @PrimaryGeneratedColumn()
  sectionId: number;

  @Column()
  branchId: string;
   
  @Column()
  deptId: string;

  @Column()
  sectionName: string;

  @Column()
  userId: string;

  @CreateDateColumn()
  DateTime: Date


}
