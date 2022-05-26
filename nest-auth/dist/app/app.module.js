"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const auth_module_1 = require("../auth/auth.module");
const users_module_1 = require("../users/users.module");
const columns_module_1 = require("../columns/columns.module");
const cards_module_1 = require("../cards/cards.module");
const comments_module_1 = require("../comments/comments.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        controllers: [],
        providers: [],
        imports: [
            users_module_1.UsersModule,
            columns_module_1.ColumnsModule,
            auth_module_1.AuthModule,
            cards_module_1.CardsModule,
            comments_module_1.CommentsModule,
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: 'dev.it-svoboda.ru',
                port: 3306,
                username: 'vitaliy',
                password: 'vitaliy123',
                database: 'vitaliy-pw1',
                entities: [],
                synchronize: true,
                autoLoadEntities: true,
            }),
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map