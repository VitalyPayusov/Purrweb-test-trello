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
const decorator_1 = require("../users/decorator");
const users_entity_1 = require("../users/users.entity");
const is_column_owner_guard_1 = require("./is-column-owner.guard");
let ColumnsController = class ColumnsController {
    constructor(columnsService) {
        this.columnsService = columnsService;
    }
    async createColumn(dto, userId) {
        return this.columnsService.createColumn(userId.id, dto);
    }
    async getColumn(id) {
        return this.columnsService.getColumn(id);
    }
    async getColumns(user) {
        return this.columnsService.getColumns(user.id);
    }
    async updateColumn(id, dto) {
        return this.columnsService.updateColumn(id, dto);
    }
    async deleteColumn(id) {
        return await this.columnsService.deleteColumn(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create column' }),
    (0, swagger_1.ApiResponse)({ status: 201, type: columns_entity_1.Columns }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'Not found' }),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [columns_dto_1.ColumnDto, users_entity_1.Users]),
    __metadata("design:returntype", Promise)
], ColumnsController.prototype, "createColumn", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get column' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: columns_entity_1.Columns }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'Not found' }),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard, is_column_owner_guard_1.IsColumnOwnerGuard),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ColumnsController.prototype, "getColumn", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get columns' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: columns_entity_1.Columns }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'Not found' }),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    __param(0, (0, decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [users_entity_1.Users]),
    __metadata("design:returntype", Promise)
], ColumnsController.prototype, "getColumns", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update column' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: columns_entity_1.Columns }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'Not found' }),
    (0, swagger_1.ApiForbiddenResponse)({ description: 'Forbidden' }),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard, is_column_owner_guard_1.IsColumnOwnerGuard),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, columns_dto_1.ColumnDto]),
    __metadata("design:returntype", Promise)
], ColumnsController.prototype, "updateColumn", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete column' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: columns_entity_1.Columns }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'Not found' }),
    (0, swagger_1.ApiForbiddenResponse)({ description: 'Forbidden' }),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard, is_column_owner_guard_1.IsColumnOwnerGuard),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ColumnsController.prototype, "deleteColumn", null);
ColumnsController = __decorate([
    (0, swagger_1.ApiTags)('Columns'),
    (0, common_1.Controller)('columns'),
    (0, swagger_1.ApiBearerAuth)('access_token'),
    __metadata("design:paramtypes", [columns_service_1.ColumnsService])
], ColumnsController);
exports.ColumnsController = ColumnsController;
//# sourceMappingURL=columns.controller.js.map