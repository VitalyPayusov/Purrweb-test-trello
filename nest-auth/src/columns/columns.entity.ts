import {Column, Entity, PrimaryGeneratedColumn, OneToMany} from "typeorm";
import {Users} from "../users/users.entity";

@Entity('columns')
export class Columns {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany((type) => Users, (user) => user.id)
    parent: Users;
}
