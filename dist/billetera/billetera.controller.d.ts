import { BilleteraService } from './billetera.service';
import { CreateBilleteraDto } from './dto/create-billetera.dto';
import { AgregarCreditoBilleteraDto, UpdateBilleteraDto } from './dto/update-billetera.dto';
export declare class BilleteraController {
    private readonly billeteraService;
    constructor(billeteraService: BilleteraService);
    crearBilletera(createBilleteraDto: CreateBilleteraDto): Promise<{
        message: string;
    }>;
    listarBilleterasByUser(userId: string): Promise<(import("mongoose").Document<unknown, {}, import("./entities/billetera.entity").Billetera> & import("./entities/billetera.entity").Billetera & Required<{
        _id: string;
    }>)[]>;
    actualizarBilletera(updateBilleteraDto: UpdateBilleteraDto): Promise<import("mongoose").Document<unknown, {}, import("./entities/billetera.entity").Billetera> & import("./entities/billetera.entity").Billetera & Required<{
        _id: string;
    }>>;
    agregarIngresos(agregarCreditoBilleteraDto: AgregarCreditoBilleteraDto): Promise<import("mongoose").Document<unknown, {}, import("./entities/billetera.entity").Billetera> & import("./entities/billetera.entity").Billetera & Required<{
        _id: string;
    }>>;
    eliminarMoneda(id: string): void;
}
