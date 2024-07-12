import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BilleteraService } from './billetera.service';
import { CreateBilleteraDto } from './dto/create-billetera.dto';
import { AgregarCreditoBilleteraDto, UpdateBilleteraDto } from './dto/update-billetera.dto';

@Controller('billetera')
export class BilleteraController {
  constructor(private readonly billeteraService: BilleteraService) {}

  @Post()
  async crearBilletera(@Body() createBilleteraDto: CreateBilleteraDto) { //solo permitir 2
    await this.billeteraService.crearBilletera(createBilleteraDto)
    return {message:`La billetera ${createBilleteraDto.nombre} se a creado` }
  }

  @Get(":id")
  async listarBilleterasByUser(@Param("id") userId:string) {
    return await this.billeteraService.listarBilleterasPorUsuario(userId)
  }

  @Patch('renombrar')
  async actualizarBilletera(@Body() updateBilleteraDto: UpdateBilleteraDto) {
    return await this.billeteraService.actualizarBilletera(updateBilleteraDto)
  }

  @Patch('agregaringreso')
  async agregarIngresos(@Body() agregarCreditoBilleteraDto: AgregarCreditoBilleteraDto  ) {
    return await this.billeteraService.agregarIngresos(agregarCreditoBilleteraDto)
  }

  @Patch(':id')
  eliminarMoneda(@Param('id') id: string) {
  }

}
