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
            'user_id': '668ee469f79ceefb077d0392', 
            'billetera_id': '668f3ce30386b7936756d1ce', 
            'createdAt': {
              '$gte': new Date('2024-02-01T00:00:00Z'), 
              '$lte': new Date('2024-07-29T23:59:59Z')
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
