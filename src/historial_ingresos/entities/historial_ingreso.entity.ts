import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument, Types } from "mongoose";




@Schema({timestamps:true})
export class HistorialIngreso {

    _id:string

    @Prop({ type: Types.ObjectId, ref: 'User' , index:true})
    user_id: Types.ObjectId;
  
    @Prop({ type: Types.ObjectId, ref: 'Billetera' , index:true})
    billetera_id: Types.ObjectId;
  
    @Prop({required:true})
    moneda:string

    @Prop({required:true})
    cantidad: number

    @Prop({default:"sin motivo"})
    motivo?: string

}




export type HistorialIngresoDocument = HydratedDocument<HistorialIngreso>;
export const HistorialIngresoSchema = SchemaFactory.createForClass(HistorialIngreso);