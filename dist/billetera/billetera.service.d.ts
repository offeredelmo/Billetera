import { CreateBilleteraDto } from './dto/create-billetera.dto';
import { Billetera } from './entities/billetera.entity';
import { Model } from 'mongoose';
import { UsersService } from 'src/users/users.service';
import { AgregarCreditoBilleteraDto, UpdateBilleteraDto } from './dto/update-billetera.dto';
import { HistorialIngresosService } from 'src/historial_ingresos/historial_ingresos.service';
export declare class BilleteraService {
    private billeteraModel;
    private readonly usersService;
    private readonly historialIngresosService;
    constructor(billeteraModel: Model<Billetera>, usersService: UsersService, historialIngresosService: HistorialIngresosService);
    crearBilletera(createBilleteraDto: CreateBilleteraDto): Promise<import("mongoose").Document<unknown, {}, Billetera> & Billetera & Required<{
        _id: string;
    }>>;
    listarBilleterasPorUsuario(user_id: any): Promise<(import("mongoose").Document<unknown, {}, Billetera> & Billetera & Required<{
        _id: string;
    }>)[]>;
    actualizarBilletera(updateBilleteraDto: UpdateBilleteraDto): Promise<import("mongoose").Document<unknown, {}, Billetera> & Billetera & Required<{
        _id: string;
    }>>;
    buscarPorId(_id: any): Promise<import("mongoose").Document<unknown, {}, Billetera> & Billetera & Required<{
        _id: string;
    }>>;
    agregarIngresos(agregarCreditoBilleteraDto: AgregarCreditoBilleteraDto): Promise<import("mongoose").Document<unknown, {}, Billetera> & Billetera & Required<{
        _id: string;
    }>>;
    eliminarMoneda(): Promise<void>;
}
