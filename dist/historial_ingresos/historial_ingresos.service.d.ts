import { CreateHistorialIngresoDto, DatosParaListarIngresos } from './dto/create-historial_ingreso.dto';
import { UpdateHistorialIngresoDto } from './dto/update-historial_ingreso.dto';
import { HistorialIngreso } from './entities/historial_ingreso.entity';
import { Model } from 'mongoose';
export declare class HistorialIngresosService {
    private historialIngresoModel;
    constructor(historialIngresoModel: Model<HistorialIngreso>);
    crear(createHistorialIngresoDto: CreateHistorialIngresoDto): Promise<import("mongoose").Document<unknown, {}, HistorialIngreso> & HistorialIngreso & Required<{
        _id: string;
    }>>;
    listarIngresosBilleteraUsuario(datosParaListarIngresos: DatosParaListarIngresos): Promise<any[]>;
    findOne(id: number): string;
    update(id: number, updateHistorialIngresoDto: UpdateHistorialIngresoDto): string;
    remove(id: number): string;
}
