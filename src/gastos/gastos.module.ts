import { Module } from '@nestjs/common';
import { GastosService } from './gastos.service';
import { GastosController } from './gastos.controller';

@Module({
  controllers: [GastosController],
  providers: [GastosService],
})
export class GastosModule {}
