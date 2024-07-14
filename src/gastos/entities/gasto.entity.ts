import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument, Types } from "mongoose";

export enum CategoriaGasto {
    ALIMENTACION = 'alimentacion',
    VIVIENDA = 'vivienda',
    TRANSPORTE = 'transporte',
    SALUD = 'salud',
    EDUCACION = 'educacion',
    ENTRETENIMIENTO = 'entretenimiento',
    ROPA = 'ropa',
    SERVICIOS = 'servicios',
    SEGUROS = 'seguros',
    IMPUESTOS = 'impuestos',
    TECNOLOGIA = 'tecnologia',
    MASCOTAS = 'mascotas',
    REGALOS = 'regalos',
    VACACIONES = 'vacaciones',
    CUIDADO_PERSONAL = 'cuidado_personal',
    HOGAR = 'hogar',
    SUBSCRIPCIONES = 'subscripciones',
    OTROS = 'otros',
    
    // Suscripciones específicas
    XBOX_GAME_PASS = 'xbox game pass',
    NVIDIA_GEFORCE_NOW = 'nvidia_geforce_now',
    NETFLIX = 'netflix',
    SPOTIFY = 'spotify',
    DISCORD_NITRO = 'discord_nitro',
    AMAZON_PRIME = 'amazon_prime',
    DISNEY_PLUS = 'disney_plus',
    HULU = 'hulu',
    APPLE_TV_PLUS = 'apple_tv_plus',
    HBO_MAX = 'hbo_max',
    YOUTUBE_PREMIUM = 'youtube_premium',
    PLAYSTATION_PLUS = 'playstation_plus',
    ADOBE_CREATIVE_CLOUD = 'adobe_creative_cloud',
    MICROSOFT_365 = 'microsoft_365',
    GOOGLE_ONE = 'google_one'
  }
  
@Schema()
export class Gasto {
    _id: string

    @Prop({ type: Types.ObjectId, ref: 'User', index: true, required:true})
    user_id: Types.ObjectId;

    @Prop({ type: Types.ObjectId, ref: 'Billetera', index: true, required:true})
    billetera_id: Types.ObjectId;

    @Prop({ required: true})
    moneda: string

    @Prop({ required: true })
    cantidad: number

    @Prop({ type: String, enum: CategoriaGasto })
    categoria?: CategoriaGasto;

    @Prop({ default: "sin motivo" })
    motivo?: string
}

export type GastoDocument = HydratedDocument<Gasto>;
export const GastoSchema = SchemaFactory.createForClass(Gasto);

