"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const users_entity_1 = require("./users.entity");
const typeorm_2 = require("@nestjs/typeorm");
let UsersService = class UsersService {
    constructor(usersService) {
        this.usersService = usersService;
    }
    async createUser(dto) {
        const user = this.usersService.create(dto);
        this.usersService.save(user);
        return await this.userEmail(user.email);
    }
    async getUser(id) {
        try {
            return await this.usersService.findOne(id);
        }
        catch (e) {
            throw new common_1.BadRequestException('User not found');
        }
    }
    getUsers() {
        return this.usersService.find();
    }
    async updateUser(id, dto) {
        const user = await this.getUser(id);
        return await this.usersService.save(Object.assign(Object.assign({}, user), { dto }));
    }
    async deleteUser(id) {
        return await this.usersService.remove(await this.usersService.findOne(id));
    }
    findOne(condition) {
        return this.usersService.findOne(condition);
    }
    async userEmail(email) {
        return await this.usersService.findOne({ where: { email } });
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(users_entity_1.Users)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map