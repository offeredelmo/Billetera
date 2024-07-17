declare class Moneda {
    nombre: string;
    cantidad: number;
}
export declare class CreateBilleteraDto {
    nombre: string;
    monedas: Moneda[];
    user_id: string;
}
export {};
