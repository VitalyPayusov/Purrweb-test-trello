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
exports.CommentsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const comments_entity_1 = require("./comments.entity");
const typeorm_2 = require("@nestjs/typeorm");
let CommentsService = class CommentsService {
    constructor(commentsService) {
        this.commentsService = commentsService;
    }
    async createComment(text, userId, cardId) {
        const obj = {
            text: text,
            userId: userId,
            cardId: cardId,
        };
        return this.commentsService.create(obj);
    }
    async getComments(cardId) {
        return await this.commentsService.find({ where: { cardId: cardId } });
    }
    async deleteComment(id) {
        return await this.commentsRepository.destroy({ where: { comment_id: id } });
    }
};
CommentsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(comments_entity_1.Comments)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], CommentsService);
exports.CommentsService = CommentsService;
//# sourceMappingURL=comments.service.js.map