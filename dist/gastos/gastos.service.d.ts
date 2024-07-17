import { CreateGastoDto } from './dto/create-gasto.dto';
import { Gasto } from './entities/gasto.entity';
import { Model } from 'mongoose';
import { BilleteraService } from 'src/billetera/billetera.service';
export declare class GastosService {
    private gastoModel;
    private billeteraService;
    constructor(gastoModel: Model<Gasto>, billeteraService: BilleteraService);
    agregarGasto(createGastoDto: CreateGastoDto): Promise<import("mongoose").Document<unknown, {}, Gasto> & Gasto & Required<{
        _id: string;
    }>>;
}
