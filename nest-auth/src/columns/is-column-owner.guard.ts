import {CanActivate, ExecutionContext} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {Columns} from "./columns.entity";
import {Repository} from "typeorm";

export class IsColumnOwnerGuard implements CanActivate {
  constructor(@InjectRepository(Columns) private readonly columnsRepository: Repository<Columns>) {
  }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const req = context.switchToHttp().getRequest();
    const { user: { id: userId }, params: { id } } = req;

    const column = await this.columnsRepository.findOne({ id });
    return column.userId === userId;
  }
}
