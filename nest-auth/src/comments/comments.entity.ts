import { MaxLength } from "class-validator";
import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Cards} from "../cards/cards.entity";

@Entity('comments')
export class Comments {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @MaxLength(300)
    text: string;

    @OneToMany((type) => Cards, (cards) => cards.id)
    parent: Cards;
}
