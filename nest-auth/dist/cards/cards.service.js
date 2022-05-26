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
const columns_entity_1 = require("../columns/columns.entity");
let CardsService = class CardsService {
    constructor(cardsRepository, columnsRepository) {
        this.cardsRepository = cardsRepository;
        this.columnsRepository = columnsRepository;
    }
    async createCard(dto) {
        const card = this.cardsRepository.create(dto);
        await this.cardsRepository.save(card);
        console.log(dto);
        console.log(card);
        return card;
    }
    async getCard(id) {
        return await this.cardsRepository.findOne({ id });
    }
    async getCards(columnId, userId) {
        try {
            const where = {};
            if (!columnId && userId) {
                const columns = await this.columnsRepository.find({ userId });
                where.columnId = (0, typeorm_1.In)(columns.map(col => col.id));
            }
            else if (columnId) {
                where.columnId = columnId;
            }
            else {
                throw new common_1.BadRequestException();
            }
            const cards = await this.cardsRepository.find({ where });
            return cards;
        }
        catch (e) {
            throw new common_1.BadRequestException('Cards not found');
        }
    }
    async updateCard(id, dto) {
        const card = await this.getCard(id);
        console.log(id);
        console.log(dto);
        console.log(id);
        return this.cardsRepository.save(Object.assign(Object.assign({}, card), dto));
    }
    async deleteCard(id) {
        const card = await this.getCard(id);
        return await this.cardsRepository.remove(card);
    }
};
CardsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(cards_entity_1.Cards)),
    __param(1, (0, typeorm_2.InjectRepository)(columns_entity_1.Columns)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        typeorm_1.Repository])
], CardsService);
exports.CardsService = CardsService;
//# sourceMappingURL=cards.service.js.map