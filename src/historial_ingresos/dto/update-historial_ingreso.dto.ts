import { PartialType } from '@nestjs/mapped-types';
import { CreateHistorialIngresoDto } from './create-historial_ingreso.dto';

export class UpdateHistorialIngresoDto extends PartialType(CreateHistorialIngresoDto) {}
