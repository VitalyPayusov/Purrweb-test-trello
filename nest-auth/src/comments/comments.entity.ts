import { MaxLength } from "class-validator";
import {Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Cards} from "../cards/cards.entity";

@Entity('comments')
export class Comments {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @MaxLength(300)
    text: string;

    @ManyToOne(type => Cards, card => card.id)
    @JoinColumn()
    card: Cards;

    @Column()
    cardId: number;
}
