import {BadRequestException, Injectable} from "@nestjs/common";
import {Repository} from "typeorm";
import {Users} from "./users.entity";
import {InjectRepository} from "@nestjs/typeorm";
import { UserDto } from "src/users/dto/users.dto";

@Injectable()
export class UsersService {
  constructor(@InjectRepository(Users) private usersService: Repository<Users>) {
  }

  async createUser(dto: UserDto): Promise<Users> {
    const user = this.usersService.create(dto);
    this.usersService.save(user);
    return await this.userEmail(user.email);
}

  async getUser(id: any): Promise<Users> {
    try {
      return await this.usersService.findOne(id);
     
    } catch(e) {
      throw new BadRequestException('User not found')
    }
  }

  getUsers(): Promise<Users[]> {
    return this.usersService.find();
  }

  async updateUser(id: any, dto: UserDto ): Promise<Users> {
    const user = await this.getUser(id);
    return await this.usersService.save({...user, dto});
  }

  async deleteUser(id: any): Promise<Users> {
    return await this.usersService.remove(await this.usersService.findOne(id));
  }

   findOne(condition: any): Promise<Users> {
     return this.usersService.findOne(condition);
   }

   async userEmail(email: string): Promise<Users> {
    return await this.usersService.findOne({ where: { email } })
}

}
