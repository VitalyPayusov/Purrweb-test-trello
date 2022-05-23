import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString, Length } from "class-validator";
import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('Users')
export class Users {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({unique: true})
   
    email: string;

    @Column()
    password?: string;
}
