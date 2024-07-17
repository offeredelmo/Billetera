import { HistorialIngresosService } from './historial_ingresos.service';
import { DatosParaListarIngresos } from './dto/create-historial_ingreso.dto';
export declare class HistorialIngresosController {
    private readonly historialIngresosService;
    constructor(historialIngresosService: HistorialIngresosService);
    listarIngresosBilleteraUsuario(datosParaListarIngresos: DatosParaListarIngresos): Promise<any[]>;
}
