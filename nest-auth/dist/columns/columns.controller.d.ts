import { ColumnsService } from "./columns.service";
import { Columns } from "./columns.entity";
import { ColumnDto } from "src/columns/dto/columns.dto";
import { UsersService } from "src/users/users.service";
export declare class ColumnsController {
    private readonly columnsService;
    private usersService;
    constructor(columnsService: ColumnsService, usersService: UsersService);
    create(dto: ColumnDto, userId: any): Promise<Columns>;
    getColumn(userId: number, columnId: number): Promise<Columns>;
    getColumns(userId: number): Promise<Columns[]>;
    updateColumn(userId: number, columnId: any, dto: ColumnDto): Promise<Columns>;
    deleteColumn(userId: number, columnId: any, dto: ColumnDto): Promise<Columns>;
}
