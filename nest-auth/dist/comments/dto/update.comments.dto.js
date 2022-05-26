"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCommentDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const comments_dto_1 = require("./comments.dto");
class UpdateCommentDto extends (0, swagger_1.PartialType)(comments_dto_1.CommentDto) {
}
exports.UpdateCommentDto = UpdateCommentDto;
//# sourceMappingURL=update.comments.dto.js.map