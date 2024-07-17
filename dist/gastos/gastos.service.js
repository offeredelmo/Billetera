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
exports.GastosService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const gasto_entity_1 = require("./entities/gasto.entity");
const mongoose_2 = require("mongoose");
const billetera_service_1 = require("../billetera/billetera.service");
let GastosService = class GastosService {
    constructor(gastoModel, billeteraService) {
        this.gastoModel = gastoModel;
        this.billeteraService = billeteraService;
    }
    async agregarGasto(createGastoDto) {
        const billetera = await this.billeteraService.buscarPorId(createGastoDto.billetera_id);
        console.log(billetera);
        const monedaIndex = billetera.monedas.findIndex(moneda => moneda.nombre == createGastoDto.moneda);
        if (monedaIndex === -1) {
            throw new common_1.NotFoundException('Moneda no encontrada en la billetera');
        }
        billetera.monedas[monedaIndex].cantidad -= createGastoDto.cantidad;
        await billetera.save();
        const nuevoGasto = new this.gastoModel(createGastoDto);
        return await nuevoGasto.save();
    }
};
exports.GastosService = GastosService;
exports.GastosService = GastosService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(gasto_entity_1.Gasto.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        billetera_service_1.BilleteraService])
], GastosService);
//# sourceMappingURL=gastos.service.js.map