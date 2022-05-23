import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Columns} from "../columns/columns.entity";

@Entity('cards')
export class Cards {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({unique: true})
    name: string;

    @OneToMany((type) => Columns, (columns) => columns.id)
    parent: Columns;
}
