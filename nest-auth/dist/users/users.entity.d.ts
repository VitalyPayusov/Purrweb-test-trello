import { Columns } from "src/columns/columns.entity";
export declare class Users {
    id: number;
    email: string;
    password?: string;
    column: Columns[];
}
