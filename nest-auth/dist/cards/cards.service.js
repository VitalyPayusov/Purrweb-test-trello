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
exports.CardsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const cards_entity_1 = require("./cards.entity");
const typeorm_2 = require("@nestjs/typeorm");
let CardsService = class CardsService {
    constructor(cardsService) {
        this.cardsService = cardsService;
    }
    async createCard(dto, columnId) {
        const obj = {
            name: dto.name,
            description: dto.description,
            result: dto.result,
            columnId: columnId,
        };
        const card = this.cardsService.create(obj);
        return card;
    }
    async getCard(id) {
        const card = await this.cardsService.findOne({ where: { cardId: id } });
        return card;
    }
    async getCards(id) {
        const card = await this.cardsService.find({ where: { columnId: id } });
        return card;
    }
    async updateCard(id, dto) {
        return await this.cardsService.save(Object.assign(Object.assign({}, dto), { where: { cardId: id } }));
    }
    async deleteCard(id) {
        return await this.cardsService.remove(await this.cardsService.findOne(id));
    }
    findOne(condition) {
        return this.cardsService.findOne(condition);
    }
};
CardsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(cards_entity_1.Cards)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], CardsService);
exports.CardsService = CardsService;
//# sourceMappingURL=cards.service.js.map