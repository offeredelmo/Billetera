import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { HistorialIngresosService } from './historial_ingresos.service';
import { CreateHistorialIngresoDto, DatosParaListarIngresos } from './dto/create-historial_ingreso.dto';
import { UpdateHistorialIngresoDto } from './dto/update-historial_ingreso.dto';

@Controller('historial-ingresos')
export class HistorialIngresosController {
  constructor(private readonly historialIngresosService: HistorialIngresosService) { }



  @Get()
  listarIngresosBilleteraUsuario(@Query() datosParaListarIngresos: DatosParaListarIngresos) {
      return this.historialIngresosService.listarIngresosBilleteraUsuario(datosParaListarIngresos);
  }


}
