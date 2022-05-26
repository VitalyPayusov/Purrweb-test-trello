import { CanActivate, ExecutionContext } from "@nestjs/common";
import { Columns } from "./columns.entity";
import { Repository } from "typeorm";
export declare class IsColumnOwnerGuard implements CanActivate {
    private readonly columnsRepository;
    constructor(columnsRepository: Repository<Columns>);
    canActivate(context: ExecutionContext): Promise<boolean>;
}
