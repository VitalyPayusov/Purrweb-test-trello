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
const decorator_1 = require("../users/decorator");
const users_entity_1 = require("../users/users.entity");
const update_cards_dto_1 = require("./dto/update.cards.dto");
let CardsController = class CardsController {
    constructor(cardsService) {
        this.cardsService = cardsService;
    }
    async create(dto) {
        return this.cardsService.createCard(dto);
    }
    async getCard(id) {
        return await this.cardsService.getCard(id);
    }
    async getCards(columnId, user) {
        return this.cardsService.getCards(columnId, user === null || user === void 0 ? void 0 : user.id);
    }
    async updateCard(id, dto) {
        console.log(id);
        console.log(dto);
        return this.cardsService.updateCard(id, dto);
    }
    async deleteCard(id) {
        return await this.cardsService.deleteCard(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create card' }),
    (0, swagger_1.ApiResponse)({ status: 201, type: cards_entity_1.Cards }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'Not found' }),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [cards_dto_1.CardDto]),
    __metadata("design:returntype", Promise)
], CardsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get card' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: cards_entity_1.Cards }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'Not found' }),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CardsController.prototype, "getCard", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get cards' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: cards_entity_1.Cards }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'Not found' }),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Query)('columnId', common_1.ParseIntPipe)),
    __param(1, (0, decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, users_entity_1.Users]),
    __metadata("design:returntype", Promise)
], CardsController.prototype, "getCards", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update card' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: cards_entity_1.Cards }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'Not found' }),
    (0, swagger_1.ApiForbiddenResponse)({ description: 'Forbidden' }),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_cards_dto_1.UpdateCardDto]),
    __metadata("design:returntype", Promise)
], CardsController.prototype, "updateCard", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete card' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: cards_entity_1.Cards }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'Not found' }),
    (0, swagger_1.ApiForbiddenResponse)({ description: 'Forbidden' }),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CardsController.prototype, "deleteCard", null);
CardsController = __decorate([
    (0, swagger_1.ApiTags)('Cards'),
    (0, common_1.Controller)('cards'),
    (0, swagger_1.ApiBearerAuth)('access_token'),
    __metadata("design:paramtypes", [cards_service_1.CardsService])
], CardsController);
exports.CardsController = CardsController;
//# sourceMappingURL=cards.controller.js.map