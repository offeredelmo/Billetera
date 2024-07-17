import { DeudasService } from './deudas.service';
import { CreateDeudaDto } from './dto/create-deuda.dto';
import { UpdateDeudaDto } from './dto/update-deuda.dto';
export declare class DeudasController {
    private readonly deudasService;
    constructor(deudasService: DeudasService);
    create(createDeudaDto: CreateDeudaDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateDeudaDto: UpdateDeudaDto): string;
    remove(id: string): string;
}
