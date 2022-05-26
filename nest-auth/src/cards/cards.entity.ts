import { Comments } from "src/comments/comments.entity";
import {Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Columns} from "../columns/columns.entity";

@Entity('cards')
export class Cards {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({unique: true})
    name: string;

    @ManyToOne(type => Columns, column => column.id)
    @JoinColumn()
    column: Columns;

    @Column()
    columnId: number;

    @OneToMany(type => Comments, comment => comment.cardId)
    comment: Comments[];
}
