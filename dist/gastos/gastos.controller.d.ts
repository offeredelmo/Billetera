import { GastosService } from './gastos.service';
import { CreateGastoDto } from './dto/create-gasto.dto';
export declare class GastosController {
    private readonly gastosService;
    constructor(gastosService: GastosService);
    agregarGasto(createGastoDto: CreateGastoDto): Promise<import("mongoose").Document<unknown, {}, import("./entities/gasto.entity").Gasto> & import("./entities/gasto.entity").Gasto & Required<{
        _id: string;
    }>>;
}
