import { UsersService } from "./users.service";
import { Users } from "./users.entity";
import { UserDto } from "src/users/dto/users.dto";
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    createUser(dto: UserDto): Promise<Users>;
    getUser(id: string): Promise<Users>;
    getAllUsers(): Promise<Users[]>;
    updateUser(id: any, dto: UserDto): Promise<Users>;
    deleteUser(id: number): Promise<Users>;
}
