import { CanActivate, ExecutionContext } from "@nestjs/common";
import { Repository } from "typeorm";
import { Cards } from "./cards.entity";
export declare class IsCardOwnerGuard implements CanActivate {
    private readonly cardsRepository;
    constructor(cardsRepository: Repository<Cards>);
    canActivate(context: ExecutionContext): Promise<boolean>;
}
