import {
    BaseEntity,
    Column,
    Entity,
    PrimaryGeneratedColumn,
} from "typeorm";

@Entity()
export class DataRecord extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    size: string;

    @Column()
    type: string;

    @Column()
    micronlevel: string;

    @Column()
    IT_NAME: string;

    @Column()
    IT_CODE: string;

    @Column()
    meterWeight: string;
}
