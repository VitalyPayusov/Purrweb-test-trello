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
exports.IsCardOwnerGuard = void 0;
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const cards_entity_1 = require("./cards.entity");
let IsCardOwnerGuard = class IsCardOwnerGuard {
    constructor(cardsRepository) {
        this.cardsRepository = cardsRepository;
    }
    async canActivate(context) {
        const req = context.switchToHttp().getRequest();
        const { user: { id: userId }, params: { id } } = req;
        const card = await this.cardsRepository.findOne(id, {
            relations: ['columns'],
        });
        return card.column.userId === userId;
    }
};
IsCardOwnerGuard = __decorate([
    __param(0, (0, typeorm_1.InjectRepository)(cards_entity_1.Cards)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], IsCardOwnerGuard);
exports.IsCardOwnerGuard = IsCardOwnerGuard;
//# sourceMappingURL=is-card-owner.guard.js.map