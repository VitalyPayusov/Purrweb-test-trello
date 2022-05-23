import {BadRequestException, Injectable} from "@nestjs/common";
import {Repository} from "typeorm";
import {Columns} from "./columns.entity";
import {InjectRepository} from "@nestjs/typeorm";
import {UsersService} from "src/users/users.service";
import { ColumnDto } from "src/columns/dto/columns.dto";

@Injectable()
export class ColumnsService {
  constructor(@InjectRepository(Columns) private readonly columnsService: Repository<Columns>, 
  private usersService: UsersService) {
  }

  async createColumn(dto: ColumnDto, userId: any) {
    const obj = {
        name: dto.name,
        description: dto.description,
        userId: userId,
    }
    const column = this.columnsService.create(obj);
    return column;
}

  async getColumn(id: number): Promise<Columns> {
    try {
      const column = this.columnsService.findOne({where: {columnId: id}});
      return column
    } catch(e) {
    throw new BadRequestException('Column not found')
  }
  }

  async getColumns(userId: number): Promise<Columns[]> {
    try {
      const columns = await this.columnsService.find({ where: { userId : userId } });
      return columns;
    } catch(e) {
      throw new BadRequestException('Columns not found')
    }
  }

  async updateColumn(id: any, dto: ColumnDto): Promise<Columns> {
    return await this.columnsService.save({...dto, ...{where: {columnId: id}}});
  }

  async deleteColumn(id: number): Promise<Columns> {
    return await this.columnsService.remove(await this.columnsService.findOne(id));
  }

}
