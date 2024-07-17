import { HydratedDocument, Types } from "mongoose";
declare class Moneda {
    _id: string;
    nombre: string;
    cantidad: number;
}
export declare class Billetera {
    _id: string;
    nombre: string;
    monedas: Moneda[];
    user_id: Types.ObjectId;
}
export type BilleteraDocument = HydratedDocument<Billetera>;
export declare const BilleteraSchema: import("mongoose").Schema<Billetera, import("mongoose").Model<Billetera, any, any, any, import("mongoose").Document<unknown, any, Billetera> & Billetera & Required<{
    _id: string;
}>, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Billetera, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Billetera>> & import("mongoose").FlatRecord<Billetera> & Required<{
    _id: string;
}>>;
export {};
