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
exports.GastoSchema = exports.Gasto = exports.CategoriaGasto = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
var CategoriaGasto;
(function (CategoriaGasto) {
    CategoriaGasto["ALIMENTACION"] = "alimentacion";
    CategoriaGasto["VIVIENDA"] = "vivienda";
    CategoriaGasto["TRANSPORTE"] = "transporte";
    CategoriaGasto["SALUD"] = "salud";
    CategoriaGasto["EDUCACION"] = "educacion";
    CategoriaGasto["ENTRETENIMIENTO"] = "entretenimiento";
    CategoriaGasto["ROPA"] = "ropa";
    CategoriaGasto["SERVICIOS"] = "servicios";
    CategoriaGasto["SEGUROS"] = "seguros";
    CategoriaGasto["IMPUESTOS"] = "impuestos";
    CategoriaGasto["TECNOLOGIA"] = "tecnologia";
    CategoriaGasto["MASCOTAS"] = "mascotas";
    CategoriaGasto["REGALOS"] = "regalos";
    CategoriaGasto["VACACIONES"] = "vacaciones";
    CategoriaGasto["CUIDADO_PERSONAL"] = "cuidado_personal";
    CategoriaGasto["HOGAR"] = "hogar";
    CategoriaGasto["SUBSCRIPCIONES"] = "subscripciones";
    CategoriaGasto["OTROS"] = "otros";
    CategoriaGasto["XBOX_GAME_PASS"] = "xbox game pass";
    CategoriaGasto["NVIDIA_GEFORCE_NOW"] = "nvidia_geforce_now";
    CategoriaGasto["NETFLIX"] = "netflix";
    CategoriaGasto["SPOTIFY"] = "spotify";
    CategoriaGasto["DISCORD_NITRO"] = "discord_nitro";
    CategoriaGasto["AMAZON_PRIME"] = "amazon_prime";
    CategoriaGasto["DISNEY_PLUS"] = "disney_plus";
    CategoriaGasto["HULU"] = "hulu";
    CategoriaGasto["APPLE_TV_PLUS"] = "apple_tv_plus";
    CategoriaGasto["HBO_MAX"] = "hbo_max";
    CategoriaGasto["YOUTUBE_PREMIUM"] = "youtube_premium";
    CategoriaGasto["PLAYSTATION_PLUS"] = "playstation_plus";
    CategoriaGasto["ADOBE_CREATIVE_CLOUD"] = "adobe_creative_cloud";
    CategoriaGasto["MICROSOFT_365"] = "microsoft_365";
    CategoriaGasto["GOOGLE_ONE"] = "google_one";
})(CategoriaGasto || (exports.CategoriaGasto = CategoriaGasto = {}));
let Gasto = class Gasto {
};
exports.Gasto = Gasto;
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: 'User', index: true, required: true }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], Gasto.prototype, "user_id", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: 'Billetera', index: true, required: true }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], Gasto.prototype, "billetera_id", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Gasto.prototype, "moneda", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], Gasto.prototype, "cantidad", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, enum: CategoriaGasto }),
    __metadata("design:type", String)
], Gasto.prototype, "categoria", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: "sin motivo" }),
    __metadata("design:type", String)
], Gasto.prototype, "motivo", void 0);
exports.Gasto = Gasto = __decorate([
    (0, mongoose_1.Schema)()
], Gasto);
exports.GastoSchema = mongoose_1.SchemaFactory.createForClass(Gasto);
//# sourceMappingURL=gasto.entity.js.map