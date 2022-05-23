import { Repository } from "typeorm";
import { Users } from "./users.entity";
import { UserDto } from "src/users/dto/users.dto";
export declare class UsersService {
    private usersService;
    constructor(usersService: Repository<Users>);
    createUser(dto: UserDto): Promise<Users>;
    getUser(id: any): Promise<Users>;
    getUsers(): Promise<Users[]>;
    updateUser(id: any, dto: UserDto): Promise<Users>;
    deleteUser(id: any): Promise<Users>;
    findOne(condition: any): Promise<Users>;
    userEmail(email: string): Promise<Users>;
}
