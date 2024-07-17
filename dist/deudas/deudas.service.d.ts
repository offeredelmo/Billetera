import { CreateDeudaDto } from './dto/create-deuda.dto';
import { UpdateDeudaDto } from './dto/update-deuda.dto';
export declare class DeudasService {
    create(createDeudaDto: CreateDeudaDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateDeudaDto: UpdateDeudaDto): string;
    remove(id: number): string;
}
