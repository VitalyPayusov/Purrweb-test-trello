import { Cards } from "src/cards/cards.entity";
import { Users } from "../users/users.entity";
export declare class Columns {
    id: number;
    name: string;
    user: Users;
    userId: number;
    card: Cards[];
}
