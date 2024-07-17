"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GastosModule = void 0;
const common_1 = require("@nestjs/common");
const gastos_service_1 = require("./gastos.service");
const gastos_controller_1 = require("./gastos.controller");
const mongoose_1 = require("@nestjs/mongoose");
const gasto_entity_1 = require("./entities/gasto.entity");
const billetera_module_1 = require("../billetera/billetera.module");
let GastosModule = class GastosModule {
};
exports.GastosModule = GastosModule;
exports.GastosModule = GastosModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: gasto_entity_1.Gasto.name, schema: gasto_entity_1.GastoSchema }]),
            billetera_module_1.BilleteraModule],
        controllers: [gastos_controller_1.GastosController],
        providers: [gastos_service_1.GastosService],
    })
], GastosModule);
//# sourceMappingURL=gastos.module.js.map