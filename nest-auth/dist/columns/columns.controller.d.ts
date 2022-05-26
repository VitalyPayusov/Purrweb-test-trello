import { ColumnsService } from "./columns.service";
import { Columns } from "./columns.entity";
import { ColumnDto } from "src/columns/dto/columns.dto";
import { Users } from "../users/users.entity";
export declare class ColumnsController {
    private readonly columnsService;
    constructor(columnsService: ColumnsService);
    createColumn(dto: ColumnDto, userId: Users): Promise<Columns>;
    getColumn(id: number): Promise<Columns>;
    getColumns(user: Users): Promise<Columns[]>;
    updateColumn(id: number, dto: ColumnDto): Promise<Columns>;
    deleteColumn(id: number): Promise<Columns>;
}
