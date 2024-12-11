import {
    BaseEntity,
    Column,
    Entity,
    PrimaryGeneratedColumn,
    CreateDateColumn,
} from "typeorm";

@Entity()
export class BatchMaster extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: true })
    branchId: string;

    @Column({ nullable: true })
    activityId: string;

    @Column({ nullable: true })
    consumedActivityId: string;

    @Column({ nullable: true })
    nodeId: string;

    @Column({ nullable: true })
    producedAt: Date;

    @Column({ nullable: true })
    producedQty1: number;

    @Column({ nullable: true })
    consumedQty1: number;

    @Column({ nullable: true })
    balanceQty1: number;

    @Column({ nullable: true })
    units1: string;

    @Column('float', { nullable: true })
    producedQty2: number;

    @Column('float', { nullable: true })
    consumedQty2: number;

    @Column('float', { nullable: true })
    balanceQty2: number;

    @Column({ nullable: true })
    units2: string;

    @Column({ nullable: true })
    lastConsumedAt: Date;

    @Column({ nullable: true })
    fgId: string;

    @Column({ nullable: true })
    producedJobId: string;

    @Column({ nullable: true })
    lastConsumedJobId: string;

    @Column('float', { nullable: true })
    conversionRate: number;

    @Column({ nullable: true })
    totalProducedQty: number

    @Column({ nullable: true })
    targetQty: number

    @Column({ nullable: true })
    outstandingQty: number

    @Column({ nullable: true })
    userId: string;

    @CreateDateColumn()
    createdDateTime: Date;

}
