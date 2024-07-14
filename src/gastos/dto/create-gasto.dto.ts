import { IsEnum, IsMongoId, IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString } from "class-validator";
import { CategoriaGasto } from "../entities/gasto.entity";


export class CreateGastoDto {

    @IsNotEmpty()
    @IsMongoId()
    user_id:string 

    @IsNotEmpty()
    @IsMongoId()
    billetera_id: string

    @IsNotEmpty()
    @IsString()
    moneda: string

    @IsNotEmpty()
    @IsNumber()
    @IsPositive()
    cantidad: number

    @IsOptional()
    @IsEnum(CategoriaGasto)
    categoria?: CategoriaGasto;

    @IsOptional()
    @IsString()
    motivo?: string
}
