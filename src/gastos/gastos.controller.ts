import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GastosService } from './gastos.service';
import { CreateGastoDto } from './dto/create-gasto.dto';
import { UpdateGastoDto } from './dto/update-gasto.dto';

@Controller('gastos')
export class GastosController {
  constructor(private readonly gastosService: GastosService) {}

  @Post()
  agregarGasto(@Body() createGastoDto: CreateGastoDto) {
    return this.gastosService.agregarGasto(createGastoDto);
  }

 
}
