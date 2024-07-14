import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DeudasService } from './deudas.service';
import { CreateDeudaDto } from './dto/create-deuda.dto';
import { UpdateDeudaDto } from './dto/update-deuda.dto';

@Controller('deudas')
export class DeudasController {
  constructor(private readonly deudasService: DeudasService) {}

  @Post()
  create(@Body() createDeudaDto: CreateDeudaDto) {
    return this.deudasService.create(createDeudaDto);
  }

  @Get()
  findAll() {
    return this.deudasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.deudasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDeudaDto: UpdateDeudaDto) {
    return this.deudasService.update(+id, updateDeudaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.deudasService.remove(+id);
  }
}
