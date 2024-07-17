import { CreateBilleteraDto } from './create-billetera.dto';
declare const UpdateBilleteraDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateBilleteraDto>>;
export declare class UpdateBilleteraDto extends UpdateBilleteraDto_base {
    _id: string;
}
export declare class AgregarCreditoBilleteraDto {
    userId: string;
    billeteraId: string;
    nombreMoneda: string;
    credito: number;
    motivo?: string;
}
export {};
