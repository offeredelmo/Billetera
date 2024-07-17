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
exports.BilleteraController = void 0;
const common_1 = require("@nestjs/common");
const billetera_service_1 = require("./billetera.service");
const create_billetera_dto_1 = require("./dto/create-billetera.dto");
const update_billetera_dto_1 = require("./dto/update-billetera.dto");
let BilleteraController = class BilleteraController {
    constructor(billeteraService) {
        this.billeteraService = billeteraService;
    }
    async crearBilletera(createBilleteraDto) {
        await this.billeteraService.crearBilletera(createBilleteraDto);
        return { message: `La billetera ${createBilleteraDto.nombre} se a creado` };
    }
    async listarBilleterasByUser(userId) {
        return await this.billeteraService.listarBilleterasPorUsuario(userId);
    }
    async actualizarBilletera(updateBilleteraDto) {
        return await this.billeteraService.actualizarBilletera(updateBilleteraDto);
    }
    async agregarIngresos(agregarCreditoBilleteraDto) {
        return await this.billeteraService.agregarIngresos(agregarCreditoBilleteraDto);
    }
    eliminarMoneda(id) {
    }
};
exports.BilleteraController = BilleteraController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_billetera_dto_1.CreateBilleteraDto]),
    __metadata("design:returntype", Promise)
], BilleteraController.prototype, "crearBilletera", null);
__decorate([
    (0, common_1.Get)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BilleteraController.prototype, "listarBilleterasByUser", null);
__decorate([
    (0, common_1.Patch)('renombrar'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_billetera_dto_1.UpdateBilleteraDto]),
    __metadata("design:returntype", Promise)
], BilleteraController.prototype, "actualizarBilletera", null);
__decorate([
    (0, common_1.Patch)('agregaringreso'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_billetera_dto_1.AgregarCreditoBilleteraDto]),
    __metadata("design:returntype", Promise)
], BilleteraController.prototype, "agregarIngresos", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BilleteraController.prototype, "eliminarMoneda", null);
exports.BilleteraController = BilleteraController = __decorate([
    (0, common_1.Controller)('billetera'),
    __metadata("design:paramtypes", [billetera_service_1.BilleteraService])
], BilleteraController);
//# sourceMappingURL=billetera.controller.js.map