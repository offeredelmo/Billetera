import { HydratedDocument, Types } from "mongoose";
export declare enum CategoriaGasto {
    ALIMENTACION = "alimentacion",
    VIVIENDA = "vivienda",
    TRANSPORTE = "transporte",
    SALUD = "salud",
    EDUCACION = "educacion",
    ENTRETENIMIENTO = "entretenimiento",
    ROPA = "ropa",
    SERVICIOS = "servicios",
    SEGUROS = "seguros",
    IMPUESTOS = "impuestos",
    TECNOLOGIA = "tecnologia",
    MASCOTAS = "mascotas",
    REGALOS = "regalos",
    VACACIONES = "vacaciones",
    CUIDADO_PERSONAL = "cuidado_personal",
    HOGAR = "hogar",
    SUBSCRIPCIONES = "subscripciones",
    OTROS = "otros",
    XBOX_GAME_PASS = "xbox game pass",
    NVIDIA_GEFORCE_NOW = "nvidia_geforce_now",
    NETFLIX = "netflix",
    SPOTIFY = "spotify",
    DISCORD_NITRO = "discord_nitro",
    AMAZON_PRIME = "amazon_prime",
    DISNEY_PLUS = "disney_plus",
    HULU = "hulu",
    APPLE_TV_PLUS = "apple_tv_plus",
    HBO_MAX = "hbo_max",
    YOUTUBE_PREMIUM = "youtube_premium",
    PLAYSTATION_PLUS = "playstation_plus",
    ADOBE_CREATIVE_CLOUD = "adobe_creative_cloud",
    MICROSOFT_365 = "microsoft_365",
    GOOGLE_ONE = "google_one"
}
export declare class Gasto {
    _id: string;
    user_id: Types.ObjectId;
    billetera_id: Types.ObjectId;
    moneda: string;
    cantidad: number;
    categoria?: CategoriaGasto;
    motivo?: string;
}
export type GastoDocument = HydratedDocument<Gasto>;
export declare const GastoSchema: import("mongoose").Schema<Gasto, import("mongoose").Model<Gasto, any, any, any, import("mongoose").Document<unknown, any, Gasto> & Gasto & Required<{
    _id: string;
}>, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Gasto, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Gasto>> & import("mongoose").FlatRecord<Gasto> & Required<{
    _id: string;
}>>;
