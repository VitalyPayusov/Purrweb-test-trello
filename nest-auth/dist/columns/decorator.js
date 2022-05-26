"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Colum = void 0;
const common_1 = require("@nestjs/common");
exports.Colum = (0, common_1.createParamDecorator)((data, ctx) => {
    var _a;
    const request = ctx.switchToHttp().getRequest();
    if (data) {
        return (_a = request.column) === null || _a === void 0 ? void 0 : _a[data];
    }
    return request.column;
});
//# sourceMappingURL=decorator.js.map