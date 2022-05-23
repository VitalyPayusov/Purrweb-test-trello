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
exports.CommentsController = void 0;
const common_1 = require("@nestjs/common");
const comments_service_1 = require("./comments.service");
const jwt_guard_1 = require("../auth/guards/jwt.guard");
const comments_entity_1 = require("./comments.entity");
const swagger_1 = require("@nestjs/swagger");
const acess_guard_1 = require("../auth/guards/acess.guard");
const decorator_1 = require("../users/decorator");
const columns_service_1 = require("../columns/columns.service");
const cards_service_1 = require("../cards/cards.service");
const users_service_1 = require("../users/users.service");
let CommentsController = class CommentsController {
    constructor(commentsService, columnsService, cardsService, usersService) {
        this.commentsService = commentsService;
        this.columnsService = columnsService;
        this.cardsService = cardsService;
        this.usersService = usersService;
    }
    async createComment(text, userId, columnId, cardId) {
        const column = await this.columnsService.getColumn(columnId);
        if (!column) {
            throw new common_1.BadRequestException('Column not found');
        }
        const card = await this.cardsService.getCard(cardId);
        if (!card) {
            throw new common_1.BadRequestException('Card not found');
        }
        return await this.commentsService.createComment(text, userId, columnId);
    }
    async getComment(userId, columnId, cardId) {
        const user = await this.usersService.getUser(userId);
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
        return await this.commentsService.getComments(cardId);
    }
    async deleteComment(columnId, cardId, commentId) {
        const column = await this.columnsService.getColumn(columnId);
        if (!column) {
            throw new common_1.BadRequestException('Column not found');
        }
        const card = await this.cardsService.getCard(cardId);
        if (!card) {
            throw new common_1.BadRequestException('Card not found');
        }
        return await this.commentsService.deleteComment(commentId);
    }
};
__decorate([
    (0, common_1.Post)('columns/:columnId/cards/:cardId/comments'),
    (0, swagger_1.ApiOperation)({ summary: 'Create comment' }),
    (0, swagger_1.ApiResponse)({ status: 201, type: comments_entity_1.Comments }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'Not found' }),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard, acess_guard_1.AccessGuard),
    __param(0, (0, common_1.Body)("text")),
    __param(1, (0, decorator_1.UserId)()),
    __param(2, (0, common_1.Param)('columnId')),
    __param(3, (0, common_1.Param)('cardId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number, Number, Number]),
    __metadata("design:returntype", Promise)
], CommentsController.prototype, "createComment", null);
__decorate([
    (0, common_1.Get)(':userId/columns/:columnId/cards/:cardId/comments'),
    (0, swagger_1.ApiOperation)({ summary: 'Get comment' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: comments_entity_1.Comments }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'Not found' }),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard, acess_guard_1.AccessGuard),
    __param(0, (0, common_1.Param)('userId')),
    __param(1, (0, common_1.Param)('columnId')),
    __param(2, (0, common_1.Param)('cardId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Number]),
    __metadata("design:returntype", Promise)
], CommentsController.prototype, "getComment", null);
__decorate([
    (0, common_1.Delete)('columns/:columnId/cards/:cardId/comments/:commentId'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete comment' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: comments_entity_1.Comments }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'Not found' }),
    (0, swagger_1.ApiForbiddenResponse)({ description: 'Forbidden' }),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard, acess_guard_1.AccessGuard),
    __param(0, (0, common_1.Param)('columnId')),
    __param(1, (0, common_1.Param)('cardId')),
    __param(2, (0, common_1.Param)('commentId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Number]),
    __metadata("design:returntype", Promise)
], CommentsController.prototype, "deleteComment", null);
CommentsController = __decorate([
    (0, swagger_1.ApiTags)('Comments'),
    (0, common_1.Controller)('users'),
    __metadata("design:paramtypes", [comments_service_1.CommentsService,
        columns_service_1.ColumnsService,
        cards_service_1.CardsService,
        users_service_1.UsersService])
], CommentsController);
exports.CommentsController = CommentsController;
//# sourceMappingURL=comments.controller.js.map