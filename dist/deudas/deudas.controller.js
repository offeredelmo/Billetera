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
exports.DeudasController = void 0;
const common_1 = require("@nestjs/common");
const deudas_service_1 = require("./deudas.service");
const create_deuda_dto_1 = require("./dto/create-deuda.dto");
const update_deuda_dto_1 = require("./dto/update-deuda.dto");
let DeudasController = class DeudasController {
    constructor(deudasService) {
        this.deudasService = deudasService;
    }
    create(createDeudaDto) {
        return this.deudasService.create(createDeudaDto);
    }
    findAll() {
        return this.deudasService.findAll();
    }
    findOne(id) {
        return this.deudasService.findOne(+id);
    }
    update(id, updateDeudaDto) {
        return this.deudasService.update(+id, updateDeudaDto);
    }
    remove(id) {
        return this.deudasService.remove(+id);
    }
};
exports.DeudasController = DeudasController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_deuda_dto_1.CreateDeudaDto]),
    __metadata("design:returntype", void 0)
], DeudasController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DeudasController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DeudasController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_deuda_dto_1.UpdateDeudaDto]),
    __metadata("design:returntype", void 0)
], DeudasController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DeudasController.prototype, "remove", null);
exports.DeudasController = DeudasController = __decorate([
    (0, common_1.Controller)('deudas'),
    __metadata("design:paramtypes", [deudas_service_1.DeudasService])
], DeudasController);
//# sourceMappingURL=deudas.controller.js.map