import { Module } from '@nestjs/common';
import { BilleteraService } from './billetera.service';
import { BilleteraController } from './billetera.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Billetera, BilleteraSchema } from './entities/billetera.entity';
import { UsersModule } from 'src/users/users.module';
import { HistorialIngresosModule } from 'src/historial_ingresos/historial_ingresos.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Billetera.name, schema: BilleteraSchema }]),
    UsersModule,
    HistorialIngresosModule
  ],
  controllers: [BilleteraController],
  providers: [BilleteraService],
})
export class BilleteraModule {}
