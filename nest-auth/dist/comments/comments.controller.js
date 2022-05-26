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
const decorator_1 = require("../users/decorator");
const columns_service_1 = require("../columns/columns.service");
const users_service_1 = require("../users/users.service");
const users_entity_1 = require("../users/users.entity");
const comments_dto_1 = require("./dto/comments.dto");
const update_comments_dto_1 = require("./dto/update.comments.dto");
let CommentsController = class CommentsController {
    constructor(commentsService, columnsService, usersService) {
        this.commentsService = commentsService;
        this.columnsService = columnsService;
        this.usersService = usersService;
    }
    async createComment(dto) {
        return this.commentsService.createComment(dto);
    }
    async getComment(id) {
        return await this.commentsService.getComment(id);
    }
    async getComments(cardId, user) {
        console.log('controller cardId - ', cardId);
        return this.commentsService.getComments(cardId);
    }
    async updateComment(id, dto) {
        console.log(id);
        console.log(dto);
        return this.commentsService.updateComment(id, dto);
    }
    async deleteComment(id) {
        return await this.commentsService.deleteComment(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create comment' }),
    (0, swagger_1.ApiResponse)({ status: 201, type: comments_entity_1.Comments }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'Not found' }),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [comments_dto_1.CommentDto]),
    __metadata("design:returntype", Promise)
], CommentsController.prototype, "createComment", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get comment' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: comments_entity_1.Comments }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'Not found' }),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CommentsController.prototype, "getComment", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get comments' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: comments_entity_1.Comments }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'Not found' }),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Query)('cardId', common_1.ParseIntPipe)),
    __param(1, (0, decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, users_entity_1.Users]),
    __metadata("design:returntype", Promise)
], CommentsController.prototype, "getComments", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update comment' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: comments_entity_1.Comments }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'Not found' }),
    (0, swagger_1.ApiForbiddenResponse)({ description: 'Forbidden' }),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_comments_dto_1.UpdateCommentDto]),
    __metadata("design:returntype", Promise)
], CommentsController.prototype, "updateComment", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete comment' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: comments_entity_1.Comments }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'Not found' }),
    (0, swagger_1.ApiForbiddenResponse)({ description: 'Forbidden' }),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CommentsController.prototype, "deleteComment", null);
CommentsController = __decorate([
    (0, swagger_1.ApiTags)('Comments'),
    (0, common_1.Controller)('comments'),
    (0, swagger_1.ApiBearerAuth)('access_token'),
    __metadata("design:paramtypes", [comments_service_1.CommentsService,
        columns_service_1.ColumnsService,
        users_service_1.UsersService])
], CommentsController);
exports.CommentsController = CommentsController;
//# sourceMappingURL=comments.controller.js.map