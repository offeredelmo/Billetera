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
exports.HistorialIngresoSchema = exports.HistorialIngreso = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let HistorialIngreso = class HistorialIngreso {
};
exports.HistorialIngreso = HistorialIngreso;
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: 'User', index: true }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], HistorialIngreso.prototype, "user_id", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: 'Billetera', index: true }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], HistorialIngreso.prototype, "billetera_id", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], HistorialIngreso.prototype, "moneda", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], HistorialIngreso.prototype, "cantidad", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: "sin motivo" }),
    __metadata("design:type", String)
], HistorialIngreso.prototype, "motivo", void 0);
exports.HistorialIngreso = HistorialIngreso = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], HistorialIngreso);
exports.HistorialIngresoSchema = mongoose_1.SchemaFactory.createForClass(HistorialIngreso);
//# sourceMappingURL=historial_ingreso.entity.js.map