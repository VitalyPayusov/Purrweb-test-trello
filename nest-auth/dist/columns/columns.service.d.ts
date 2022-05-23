import { Repository } from "typeorm";
import { Columns } from "./columns.entity";
import { UsersService } from "src/users/users.service";
import { ColumnDto } from "src/columns/dto/columns.dto";
export declare class ColumnsService {
    private readonly columnsService;
    private usersService;
    constructor(columnsService: Repository<Columns>, usersService: UsersService);
    createColumn(dto: ColumnDto, userId: any): Promise<Columns>;
    getColumn(id: number): Promise<Columns>;
    getColumns(userId: number): Promise<Columns[]>;
    updateColumn(id: any, dto: ColumnDto): Promise<Columns>;
    deleteColumn(id: number): Promise<Columns>;
}
