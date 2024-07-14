import { Injectable } from '@nestjs/common';
import { CreateHistorialIngresoDto, DatosParaListarIngresos } from './dto/create-historial_ingreso.dto';
import { UpdateHistorialIngresoDto } from './dto/update-historial_ingreso.dto';
import { InjectModel } from '@nestjs/mongoose';
import { HistorialIngreso } from './entities/historial_ingreso.entity';
import { Model } from 'mongoose';

@Injectable()
export class HistorialIngresosService {
  constructor(
    @InjectModel(HistorialIngreso.name) private historialIngresoModel: Model<HistorialIngreso>
  ){}

  async crear(createHistorialIngresoDto: CreateHistorialIngresoDto) {
    const newHistory = new this.historialIngresoModel(createHistorialIngresoDto)
    return await newHistory.save()
  }

  async listarIngresosBilleteraUsuario(datosParaListarIngresos: DatosParaListarIngresos) {

    const ingresos = await this.historialIngresoModel.aggregate(
      [
        {
          '$match': {
            'user_id': datosParaListarIngresos.user_id, 
            'billetera_id': datosParaListarIngresos.billetera_id, 
            'createdAt': {
              '$gte': new Date(datosParaListarIngresos.fecha_inicio), 
              '$lte': new Date(datosParaListarIngresos.fecha_fin)
            },
            'moneda': datosParaListarIngresos.moneda
          }
        }
      ]
    )
    return ingresos
  }

  findOne(id: number) {
    return `This action returns a #${id} historialIngreso`;
  }

  update(id: number, updateHistorialIngresoDto: UpdateHistorialIngresoDto) {
    return `This action updates a #${id} historialIngreso`;
  }

  remove(id: number) {
    return `This action removes a #${id} historialIngreso`;
  }
}
