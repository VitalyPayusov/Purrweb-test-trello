import { Comments } from "src/comments/comments.entity";
import { Columns } from "../columns/columns.entity";
export declare class Cards {
    id: number;
    name: string;
    column: Columns;
    columnId: number;
    comment: Comments[];
}
