import { CategoriaGasto } from "../entities/gasto.entity";
export declare class CreateGastoDto {
    user_id: string;
    billetera_id: string;
    moneda: string;
    cantidad: number;
    categoria?: CategoriaGasto;
    motivo?: string;
}
