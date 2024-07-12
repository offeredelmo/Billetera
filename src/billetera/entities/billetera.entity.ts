import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument, Types } from "mongoose";



@Schema({_id:true})
class Moneda {
    _id:string

    @Prop({default: "billetera 1"})
    nombre: string

    @Prop({default: 0})
    cantidad:number
}

const MonedaSchema = SchemaFactory.createForClass(Moneda);

@Schema()
export class Billetera {

    _id:string

    @Prop()
    nombre:string

    @Prop({ type: [MonedaSchema], default: [] }) 
    monedas: Moneda[];

    @Prop({ type: Types.ObjectId, ref: 'User' })
    user_id: Types.ObjectId;
}



export type BilleteraDocument = HydratedDocument<Billetera>;
export const BilleteraSchema = SchemaFactory.createForClass(Billetera);