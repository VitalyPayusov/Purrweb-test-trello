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
exports.ColumnsController = void 0;
const common_1 = require("@nestjs/common");
const columns_service_1 = require("./columns.service");
const jwt_guard_1 = require("../auth/guards/jwt.guard");
const columns_entity_1 = require("./columns.entity");
const swagger_1 = require("@nestjs/swagger");
const columns_dto_1 = require("./dto/columns.dto");
const acess_guard_1 = require("../auth/guards/acess.guard");
const users_service_1 = require("../users/users.service");
const decorator_1 = require("../users/decorator");
let ColumnsController = class ColumnsController {
    constructor(columnsService, usersService) {
        this.columnsService = columnsService;
        this.usersService = usersService;
    }
    async create(dto, userId) {
        return await this.columnsService.createColumn(dto, userId);
    }
    async getColumn(userId, columnId) {
        const user = await this.usersService.getUser(userId);
        if (!user) {
            throw new common_1.BadRequestException('User not found');
        }
        return await this.columnsService.getColumn(columnId);
    }
    async getColumns(userId) {
        const user = await this.usersService.getUser(userId);
        if (!user) {
            throw new common_1.BadRequestException('User not found');
        }
        return this.columnsService.getColumns(userId);
    }
    async updateColumn(userId, columnId, dto) {
        const user = await this.usersService.getUser(userId);
        if (!user) {
            throw new common_1.BadRequestException('User not found');
        }
        return await this.columnsService.updateColumn(dto, columnId);
    }
    async deleteColumn(userId, columnId, dto) {
        const user = await this.usersService.getUser(userId);
        if (!user) {
            throw new common_1.BadRequestException('User not found');
        }
        return await this.columnsService.updateColumn(dto, columnId);
    }
};
__decorate([
    (0, common_1.Post)('columns'),
    (0, swagger_1.ApiOperation)({ summary: 'Create column' }),
    (0, swagger_1.ApiResponse)({ status: 201, type: columns_entity_1.Columns }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'Not found' }),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard, acess_guard_1.AccessGuard),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, decorator_1.UserId)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [columns_dto_1.ColumnDto, Object]),
    __metadata("design:returntype", Promise)
], ColumnsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(':userId/columns/:columnId'),
    (0, swagger_1.ApiOperation)({ summary: 'Get column' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: columns_entity_1.Columns }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'Not found' }),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard, acess_guard_1.AccessGuard),
    __param(0, (0, common_1.Param)('userId')),
    __param(1, (0, common_1.Param)('columnId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], ColumnsController.prototype, "getColumn", null);
__decorate([
    (0, common_1.Get)(':userId/columns'),
    (0, swagger_1.ApiOperation)({ summary: 'Get columns' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: columns_entity_1.Columns }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'Not found' }),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard, acess_guard_1.AccessGuard),
    __param(0, (0, common_1.Param)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ColumnsController.prototype, "getColumns", null);
__decorate([
    (0, common_1.Patch)('columns/:columnId'),
    (0, swagger_1.ApiOperation)({ summary: 'Update column' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: columns_entity_1.Columns }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'Not found' }),
    (0, swagger_1.ApiForbiddenResponse)({ description: 'Forbidden' }),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard, acess_guard_1.AccessGuard),
    __param(0, (0, common_1.Param)('userId')),
    __param(1, (0, common_1.Param)('columnId')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object, columns_dto_1.ColumnDto]),
    __metadata("design:returntype", Promise)
], ColumnsController.prototype, "updateColumn", null);
__decorate([
    (0, common_1.Delete)('columns/:columnId'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete column' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: columns_entity_1.Columns }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'Not found' }),
    (0, swagger_1.ApiForbiddenResponse)({ description: 'Forbidden' }),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard, acess_guard_1.AccessGuard),
    __param(0, (0, common_1.Param)('userId')),
    __param(1, (0, common_1.Param)('columnId')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object, columns_dto_1.ColumnDto]),
    __metadata("design:returntype", Promise)
], ColumnsController.prototype, "deleteColumn", null);
ColumnsController = __decorate([
    (0, swagger_1.ApiTags)('Columns'),
    (0, common_1.Controller)('users'),
    __metadata("design:paramtypes", [columns_service_1.ColumnsService,
        users_service_1.UsersService])
], ColumnsController);
exports.ColumnsController = ColumnsController;
//# sourceMappingURL=columns.controller.js.map