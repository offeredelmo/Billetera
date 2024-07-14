import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateGastoDto } from './dto/create-gasto.dto';
import { UpdateGastoDto } from './dto/update-gasto.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Gasto } from './entities/gasto.entity';
import { Model } from 'mongoose';
import { BilleteraService } from 'src/billetera/billetera.service';

@Injectable()
export class GastosService {
  constructor(
  
    @InjectModel(Gasto.name) private gastoModel: Model<Gasto>,
    private billeteraService:BilleteraService
  
  ){}

  async agregarGasto(createGastoDto: CreateGastoDto) {
    const billetera = await this.billeteraService.buscarPorId(createGastoDto.billetera_id)
    console.log(billetera)
    const monedaIndex = billetera.monedas.findIndex(moneda => moneda.nombre == createGastoDto.moneda)
    
    if (monedaIndex === -1) {
      throw new NotFoundException('Moneda no encontrada en la billetera');
    }

    billetera.monedas[monedaIndex].cantidad -= createGastoDto.cantidad;
  
    await billetera.save();

    const nuevoGasto = new this.gastoModel(createGastoDto)
    return await nuevoGasto.save()
   
  }

}
