import { Cards } from "src/cards/cards.entity";
import {Column, Entity, PrimaryGeneratedColumn, OneToMany, ManyToOne, JoinColumn} from "typeorm";
import {Users} from "../users/users.entity";

@Entity('columns')
export class Columns {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @ManyToOne(type => Users, user => user.id)
    @JoinColumn()
    user: Users;

    @Column()
    userId: number;

    @OneToMany(type => Cards, card => card.columnId)
    card: Cards[];
}
