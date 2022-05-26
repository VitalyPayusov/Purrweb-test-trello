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
exports.Columns = void 0;
const cards_entity_1 = require("../cards/cards.entity");
const typeorm_1 = require("typeorm");
const users_entity_1 = require("../users/users.entity");
let Columns = class Columns {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Columns.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Columns.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(type => users_entity_1.Users, user => user.id),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", users_entity_1.Users)
], Columns.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Columns.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(type => cards_entity_1.Cards, card => card.columnId),
    __metadata("design:type", Array)
], Columns.prototype, "card", void 0);
Columns = __decorate([
    (0, typeorm_1.Entity)('columns')
], Columns);
exports.Columns = Columns;
//# sourceMappingURL=columns.entity.js.map