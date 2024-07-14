import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateBilleteraDto } from './dto/create-billetera.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Billetera } from './entities/billetera.entity';
import { Model, Types } from 'mongoose';
import { UsersService } from 'src/users/users.service';
import { UserRole } from 'src/users/enums/rol.enum';
import { AgregarCreditoBilleteraDto, UpdateBilleteraDto } from './dto/update-billetera.dto';
import { HistorialIngresosService } from 'src/historial_ingresos/historial_ingresos.service';
import { CreateHistorialIngresoDto } from 'src/historial_ingresos/dto/create-historial_ingreso.dto';


@Injectable()
export class BilleteraService {
  constructor(
    @InjectModel(Billetera.name) private billeteraModel: Model<Billetera>,
    private readonly usersService: UsersService,
    private readonly historialIngresosService:HistorialIngresosService
  ) { }

  async crearBilletera(createBilleteraDto: CreateBilleteraDto) { //solo permitir 2
    const user = await this.usersService.findById(createBilleteraDto.user_id)

    const numeroDeBilleteras = await this.billeteraModel.countDocuments({ user_id: user.id })

    if (numeroDeBilleteras > 1 || !user.roles.includes(UserRole.USER)) {
      throw new BadRequestException("Haz alcanzado el limite maximo de billeteras")
    }
    const nuevaBilletera = new this.billeteraModel(createBilleteraDto)
    return await nuevaBilletera.save()

  }

  async listarBilleterasPorUsuario(user_id) {
    await this.usersService.findById(user_id)
    return await this.billeteraModel.find(
      {user_id:user_id}
    )
  }

  async actualizarBilletera( updateBilleteraDto: UpdateBilleteraDto) {
    
    const billeteraActualizada = await this.billeteraModel.findByIdAndUpdate(
      updateBilleteraDto._id,
      {$set: updateBilleteraDto},
      {new:true}
    ).exec()

    if (!billeteraActualizada) {
      throw new NotFoundException(`la billetera con el id ${updateBilleteraDto._id} no fue ecnontrada`)
    }

    return billeteraActualizada
  }


  async buscarPorId(_id) {
    const billetera = await this.billeteraModel.findById(_id)
    if (!billetera) {
      throw new NotFoundException(`la billetera con el id ${_id} no fue encontrada`)
    }
    return billetera
  }

  //mover al servicio de ingresos
  async agregarIngresos(agregarCreditoBilleteraDto: AgregarCreditoBilleteraDto) {
    const billetera = await this.billeteraModel.findById(agregarCreditoBilleteraDto.billeteraId);
    
    if (!billetera) {
      throw new NotFoundException('Billetera no encontrada');
    }

    const monedaIndex = billetera.monedas.findIndex(moneda => moneda.nombre == agregarCreditoBilleteraDto.nombreMoneda)
    
    if (monedaIndex === -1) {
      throw new NotFoundException('Moneda no encontrada en la billetera');
    }
    billetera.monedas[monedaIndex].cantidad += agregarCreditoBilleteraDto.credito;
  
    await billetera.save();

    const createHistorialIngresoDto: CreateHistorialIngresoDto = {
      user_id: agregarCreditoBilleteraDto.userId,
      billetera_id: agregarCreditoBilleteraDto.billeteraId,
      moneda: billetera.monedas[monedaIndex].nombre,
      cantidad: agregarCreditoBilleteraDto.credito,
      motivo: agregarCreditoBilleteraDto.motivo
    }
    
    await this.historialIngresosService.crear(createHistorialIngresoDto)

    return billetera;
  }

  async eliminarMoneda() {
  }
}
