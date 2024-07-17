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
exports.BilleteraSchema = exports.Billetera = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let Moneda = class Moneda {
};
__decorate([
    (0, mongoose_1.Prop)({ default: "billetera 1" }),
    __metadata("design:type", String)
], Moneda.prototype, "nombre", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 0 }),
    __metadata("design:type", Number)
], Moneda.prototype, "cantidad", void 0);
Moneda = __decorate([
    (0, mongoose_1.Schema)({ _id: true })
], Moneda);
const MonedaSchema = mongoose_1.SchemaFactory.createForClass(Moneda);
let Billetera = class Billetera {
};
exports.Billetera = Billetera;
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Billetera.prototype, "nombre", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [MonedaSchema], default: [] }),
    __metadata("design:type", Array)
], Billetera.prototype, "monedas", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: 'User' }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], Billetera.prototype, "user_id", void 0);
exports.Billetera = Billetera = __decorate([
    (0, mongoose_1.Schema)()
], Billetera);
exports.BilleteraSchema = mongoose_1.SchemaFactory.createForClass(Billetera);
//# sourceMappingURL=billetera.entity.js.map