"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeudasModule = void 0;
const common_1 = require("@nestjs/common");
const deudas_service_1 = require("./deudas.service");
const deudas_controller_1 = require("./deudas.controller");
let DeudasModule = class DeudasModule {
};
exports.DeudasModule = DeudasModule;
exports.DeudasModule = DeudasModule = __decorate([
    (0, common_1.Module)({
        controllers: [deudas_controller_1.DeudasController],
        providers: [deudas_service_1.DeudasService],
    })
], DeudasModule);
//# sourceMappingURL=deudas.module.js.map