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
exports.CardsController = void 0;
const common_1 = require("@nestjs/common");
const cards_service_1 = require("./cards.service");
const jwt_guard_1 = require("../auth/guards/jwt.guard");
const cards_entity_1 = require("./cards.entity");
const swagger_1 = require("@nestjs/swagger");
const cards_dto_1 = require("./dto/cards.dto");
const acess_guard_1 = require("../auth/guards/acess.guard");
const columns_service_1 = require("../columns/columns.service");
const users_service_1 = require("../users/users.service");
let CardsController = class CardsController {
    constructor(cardsService, columnsService, usersService) {
        this.cardsService = cardsService;
        this.columnsService = columnsService;
        this.usersService = usersService;
    }
    async createCard(dto, columnId) {
        const column = await this.columnsService.getColumn(columnId);
        if (!column) {
            throw new common_1.BadRequestException('Column not found');
        }
        return await this.cardsService.createCard(dto, columnId);
    }
    async getCards(userId, columnId) {
        const user = await this.usersService.getUser(userId);
        if (!user) {
            throw new common_1.BadRequestException('User not found');
        }
        const column = await this.columnsService.getColumn(columnId);
        if (!column) {
            throw new common_1.BadRequestException('Column not found');
        }
        return await this.cardsService.getCards(columnId);
    }
    async getCard(userId, columnId, cardId) {
        const user = await this.userService.getUser(userId);
        if (!user) {
            throw new common_1.BadRequestException('User not found');
        }
        const column = await this.columnsService.getColumn(columnId);
        if (!column) {
            throw new common_1.BadRequestException('Column not found');
        }
        const card = await this.cardsService.getCard(cardId);
        if (!card) {
            throw new common_1.BadRequestException('Card not found');
        }
        return card;
    }
    async updateCard(columnId, cardId, dto) {
        const column = await this.columnsService.getColumn(columnId);
        if (!column) {
            throw new common_1.BadRequestException('Column not found');
        }
        const card = await this.cardsService.getCard(cardId);
        if (!card) {
            throw new common_1.BadRequestException('Card not found');
        }
        return await this.cardsService.updateCard(dto, cardId);
    }
    async deleteCard(columnId, cardId) {
        const column = await this.columnsService.getColumn(columnId);
        if (!column) {
            throw new common_1.BadRequestException('Column not found');
        }
        const card = await this.cardsService.getCard(cardId);
        if (!card) {
            throw new common_1.BadRequestException('Card not found');
        }
        return await this.cardsService.deleteCard(cardId);
    }
};
__decorate([
    (0, common_1.Post)('columns/:columnId/cards'),
    (0, swagger_1.ApiOperation)({ summary: 'Create card' }),
    (0, swagger_1.ApiResponse)({ status: 201, type: cards_entity_1.Cards }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'Not found' }),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard, acess_guard_1.AccessGuard),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('columnId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [cards_dto_1.CardDto, Number]),
    __metadata("design:returntype", Promise)
], CardsController.prototype, "createCard", null);
__decorate([
    (0, common_1.Get)(':userId/columns/:columnId/cards'),
    (0, swagger_1.ApiOperation)({ summary: 'Get card' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: cards_entity_1.Cards }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'Not found' }),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard, acess_guard_1.AccessGuard),
    __param(0, (0, common_1.Param)('userId')),
    __param(1, (0, common_1.Param)('columnId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], CardsController.prototype, "getCards", null);
__decorate([
    (0, common_1.Get)(':userId/columns/:columnId/cards/:cardId'),
    (0, swagger_1.ApiOperation)({ summary: 'Get cards' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: cards_entity_1.Cards }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'Not found' }),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard, acess_guard_1.AccessGuard),
    __param(0, (0, common_1.Param)('userId')),
    __param(1, (0, common_1.Param)('columnId')),
    __param(2, (0, common_1.Param)('cardId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Number]),
    __metadata("design:returntype", Promise)
], CardsController.prototype, "getCard", null);
__decorate([
    (0, common_1.Patch)('columns/:columnId/cards/:cardId'),
    (0, swagger_1.ApiOperation)({ summary: 'Update card' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: cards_entity_1.Cards }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'Not found' }),
    (0, swagger_1.ApiForbiddenResponse)({ description: 'Forbidden' }),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard, acess_guard_1.AccessGuard),
    __param(0, (0, common_1.Param)('columnId')),
    __param(1, (0, common_1.Param)('cardId')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object, Object]),
    __metadata("design:returntype", Promise)
], CardsController.prototype, "updateCard", null);
__decorate([
    (0, common_1.Delete)('columns/:columnId/cards/:cardId'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete card' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: cards_entity_1.Cards }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'Not found' }),
    (0, swagger_1.ApiForbiddenResponse)({ description: 'Forbidden' }),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard, acess_guard_1.AccessGuard),
    __param(0, (0, common_1.Param)('columnId')),
    __param(1, (0, common_1.Param)('cardId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], CardsController.prototype, "deleteCard", null);
CardsController = __decorate([
    (0, swagger_1.ApiTags)('Cards'),
    (0, common_1.Controller)('users'),
    __metadata("design:paramtypes", [cards_service_1.CardsService,
        columns_service_1.ColumnsService,
        users_service_1.UsersService])
], CardsController);
exports.CardsController = CardsController;
//# sourceMappingURL=cards.controller.js.map