import { Injectable } from '@nestjs/common';
import { CreateDeudaDto } from './dto/create-deuda.dto';
import { UpdateDeudaDto } from './dto/update-deuda.dto';

@Injectable()
export class DeudasService {
  create(createDeudaDto: CreateDeudaDto) {
    return 'This action adds a new deuda';
  }

  findAll() {
    return `This action returns all deudas`;
  }

  findOne(id: number) {
    return `This action returns a #${id} deuda`;
  }

  update(id: number, updateDeudaDto: UpdateDeudaDto) {
    return `This action updates a #${id} deuda`;
  }

  remove(id: number) {
    return `This action removes a #${id} deuda`;
  }
}
