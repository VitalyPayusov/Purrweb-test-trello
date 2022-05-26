import { Columns } from "src/columns/columns.entity";
import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";

@Entity('Users')
export class Users {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({unique: true})

    email: string;

    @Column()
    password?: string;

    @OneToMany(type => Columns, column => column.userId)
    column: Columns[];
}
