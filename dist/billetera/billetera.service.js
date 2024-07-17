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
exports.BilleteraService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const billetera_entity_1 = require("./entities/billetera.entity");
const mongoose_2 = require("mongoose");
const users_service_1 = require("../users/users.service");
const rol_enum_1 = require("../users/enums/rol.enum");
const historial_ingresos_service_1 = require("../historial_ingresos/historial_ingresos.service");
let BilleteraService = class BilleteraService {
    constructor(billeteraModel, usersService, historialIngresosService) {
        this.billeteraModel = billeteraModel;
        this.usersService = usersService;
        this.historialIngresosService = historialIngresosService;
    }
    async crearBilletera(createBilleteraDto) {
        const user = await this.usersService.findById(createBilleteraDto.user_id);
        const numeroDeBilleteras = await this.billeteraModel.countDocuments({ user_id: user.id });
        if (numeroDeBilleteras > 1 || !user.roles.includes(rol_enum_1.UserRole.USER)) {
            throw new common_1.BadRequestException("Haz alcanzado el limite maximo de billeteras");
        }
        const nuevaBilletera = new this.billeteraModel(createBilleteraDto);
        return await nuevaBilletera.save();
    }
    async listarBilleterasPorUsuario(user_id) {
        await this.usersService.findById(user_id);
        return await this.billeteraModel.find({ user_id: user_id });
    }
    async actualizarBilletera(updateBilleteraDto) {
        const billeteraActualizada = await this.billeteraModel.findByIdAndUpdate(updateBilleteraDto._id, { $set: updateBilleteraDto }, { new: true }).exec();
        if (!billeteraActualizada) {
            throw new common_1.NotFoundException(`la billetera con el id ${updateBilleteraDto._id} no fue ecnontrada`);
        }
        return billeteraActualizada;
    }
    async buscarPorId(_id) {
        const billetera = await this.billeteraModel.findById(_id);
        if (!billetera) {
            throw new common_1.NotFoundException(`la billetera con el id ${_id} no fue encontrada`);
        }
        return billetera;
    }
    async agregarIngresos(agregarCreditoBilleteraDto) {
        const billetera = await this.billeteraModel.findById(agregarCreditoBilleteraDto.billeteraId);
        if (!billetera) {
            throw new common_1.NotFoundException('Billetera no encontrada');
        }
        const monedaIndex = billetera.monedas.findIndex(moneda => moneda.nombre == agregarCreditoBilleteraDto.nombreMoneda);
        if (monedaIndex === -1) {
            throw new common_1.NotFoundException('Moneda no encontrada en la billetera');
        }
        billetera.monedas[monedaIndex].cantidad += agregarCreditoBilleteraDto.credito;
        await billetera.save();
        const createHistorialIngresoDto = {
            user_id: agregarCreditoBilleteraDto.userId,
            billetera_id: agregarCreditoBilleteraDto.billeteraId,
            moneda: billetera.monedas[monedaIndex].nombre,
            cantidad: agregarCreditoBilleteraDto.credito,
            motivo: agregarCreditoBilleteraDto.motivo
        };
        await this.historialIngresosService.crear(createHistorialIngresoDto);
        return billetera;
    }
    async eliminarMoneda() {
    }
};
exports.BilleteraService = BilleteraService;
exports.BilleteraService = BilleteraService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(billetera_entity_1.Billetera.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        users_service_1.UsersService,
        historial_ingresos_service_1.HistorialIngresosService])
], BilleteraService);
//# sourceMappingURL=billetera.service.js.map