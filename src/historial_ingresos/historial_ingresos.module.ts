import { Module } from '@nestjs/common';
import { HistorialIngresosService } from './historial_ingresos.service';
import { HistorialIngresosController } from './historial_ingresos.controller';
import { HistorialIngreso, HistorialIngresoSchema } from './entities/historial_ingreso.entity';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: HistorialIngreso.name, schema: HistorialIngresoSchema }]),
  ],
  controllers: [HistorialIngresosController],
  providers: [HistorialIngresosService],
  exports:[
    HistorialIngresosService
  ]
})
export class HistorialIngresosModule {}
