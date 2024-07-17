"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BilleteraModule = void 0;
const common_1 = require("@nestjs/common");
const billetera_service_1 = require("./billetera.service");
const billetera_controller_1 = require("./billetera.controller");
const mongoose_1 = require("@nestjs/mongoose");
const billetera_entity_1 = require("./entities/billetera.entity");
const users_module_1 = require("../users/users.module");
const historial_ingresos_module_1 = require("../historial_ingresos/historial_ingresos.module");
let BilleteraModule = class BilleteraModule {
};
exports.BilleteraModule = BilleteraModule;
exports.BilleteraModule = BilleteraModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: billetera_entity_1.Billetera.name, schema: billetera_entity_1.BilleteraSchema }]),
            users_module_1.UsersModule,
            historial_ingresos_module_1.HistorialIngresosModule
        ],
        controllers: [billetera_controller_1.BilleteraController],
        providers: [billetera_service_1.BilleteraService],
        exports: [billetera_service_1.BilleteraService]
    })
], BilleteraModule);
//# sourceMappingURL=billetera.module.js.map