"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardsModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const auth_module_1 = require("../auth/auth.module");
const cards_controller_1 = require("./cards.controller");
const cards_entity_1 = require("./cards.entity");
const cards_service_1 = require("./cards.service");
const columns_entity_1 = require("../columns/columns.entity");
const is_card_owner_guard_1 = require("./is-card-owner.guard");
let CardsModule = class CardsModule {
};
CardsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            auth_module_1.AuthModule,
            typeorm_1.TypeOrmModule.forFeature([cards_entity_1.Cards, columns_entity_1.Columns]),
        ],
        controllers: [cards_controller_1.CardsController],
        providers: [cards_service_1.CardsService, is_card_owner_guard_1.IsCardOwnerGuard],
        exports: [cards_service_1.CardsService]
    })
], CardsModule);
exports.CardsModule = CardsModule;
//# sourceMappingURL=cards.module.js.map