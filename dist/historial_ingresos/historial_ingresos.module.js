"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HistorialIngresosModule = void 0;
const common_1 = require("@nestjs/common");
const historial_ingresos_service_1 = require("./historial_ingresos.service");
const historial_ingresos_controller_1 = require("./historial_ingresos.controller");
const historial_ingreso_entity_1 = require("./entities/historial_ingreso.entity");
const mongoose_1 = require("@nestjs/mongoose");
let HistorialIngresosModule = class HistorialIngresosModule {
};
exports.HistorialIngresosModule = HistorialIngresosModule;
exports.HistorialIngresosModule = HistorialIngresosModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: historial_ingreso_entity_1.HistorialIngreso.name, schema: historial_ingreso_entity_1.HistorialIngresoSchema }]),
        ],
        controllers: [historial_ingresos_controller_1.HistorialIngresosController],
        providers: [historial_ingresos_service_1.HistorialIngresosService],
        exports: [
            historial_ingresos_service_1.HistorialIngresosService
        ]
    })
], HistorialIngresosModule);
//# sourceMappingURL=historial_ingresos.module.js.map