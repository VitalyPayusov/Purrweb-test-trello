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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCardDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateCardDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Do homework', description: 'Title of card' }),
    (0, class_validator_1.IsString)({ message: "Must be string" }),
    (0, class_validator_1.Length)(4, 32, { message: "Must be from 4 to 32" }),
    __metadata("design:type", String)
], CreateCardDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'You should do your math homework', description: 'Description of card', required: false }),
    __metadata("design:type", String)
], CreateCardDto.prototype, "description", void 0);
exports.CreateCardDto = CreateCardDto;
//# sourceMappingURL=create.dto.js.map