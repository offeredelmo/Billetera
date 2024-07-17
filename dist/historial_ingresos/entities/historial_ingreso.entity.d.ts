import { HydratedDocument, Types } from "mongoose";
export declare class HistorialIngreso {
    _id: string;
    user_id: Types.ObjectId;
    billetera_id: Types.ObjectId;
    moneda: string;
    cantidad: number;
    motivo?: string;
}
export type HistorialIngresoDocument = HydratedDocument<HistorialIngreso>;
export declare const HistorialIngresoSchema: import("mongoose").Schema<HistorialIngreso, import("mongoose").Model<HistorialIngreso, any, any, any, import("mongoose").Document<unknown, any, HistorialIngreso> & HistorialIngreso & Required<{
    _id: string;
}>, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, HistorialIngreso, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<HistorialIngreso>> & import("mongoose").FlatRecord<HistorialIngreso> & Required<{
    _id: string;
}>>;
