"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignInUserDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const users_dto_1 = require("./users.dto");
class SignInUserDto extends (0, swagger_1.PickType)(users_dto_1.UserDto, ['email', 'password']) {
}
exports.SignInUserDto = SignInUserDto;
//# sourceMappingURL=signin.user.dto.js.map