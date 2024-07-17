export declare class CreateHistorialIngresoDto {
    user_id: string;
    billetera_id: string;
    moneda: string;
    cantidad: number;
    motivo?: string;
}
export declare class DatosParaListarIngresos {
    user_id: string;
    billetera_id: string;
    moneda: string;
    fecha_inicio: Date;
    fecha_fin: Date;
}
