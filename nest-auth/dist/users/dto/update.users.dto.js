"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUserDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const users_dto_1 = require("./users.dto");
class UpdateUserDto extends (0, swagger_1.PartialType)(users_dto_1.UserDto) {
}
exports.UpdateUserDto = UpdateUserDto;
//# sourceMappingURL=update.users.dto.js.map