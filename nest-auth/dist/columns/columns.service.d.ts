import { Repository } from "typeorm";
import { Columns } from "./columns.entity";
import { ColumnDto } from "src/columns/dto/columns.dto";
export declare class ColumnsService {
    private readonly columnsRepository;
    constructor(columnsRepository: Repository<Columns>);
    createColumn(userId: number, dto: ColumnDto): Promise<Columns>;
    getColumn(id: number): Promise<Columns>;
    getColumns(userId: number): Promise<Columns[]>;
    updateColumn(id: number, dto: ColumnDto): Promise<Columns>;
    deleteColumn(id: number): Promise<Columns>;
}
