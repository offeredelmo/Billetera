import { Module } from '@nestjs/common';
import { DeudasService } from './deudas.service';
import { DeudasController } from './deudas.controller';

@Module({
  controllers: [DeudasController],
  providers: [DeudasService],
})
export class DeudasModule {}
