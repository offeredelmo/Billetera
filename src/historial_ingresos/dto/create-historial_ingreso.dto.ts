import { IsDate, IsDateString, IsMongoId, IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString, Min } from "class-validator"


export class CreateHistorialIngresoDto {
    @IsNotEmpty()
    @IsMongoId()
    user_id: string

    @IsNotEmpty()
    @IsMongoId()
    billetera_id: string

    @IsNotEmpty()
    @IsString()
    moneda: string

    @IsNotEmpty()
    @IsNumber()
    @IsPositive()
    @Min(1)
    cantidad: number

    @IsOptional()
    @IsNotEmpty()
    motivo?: string
}



export class DatosParaListarIngresos {
    @IsNotEmpty()
    @IsMongoId()
    user_id: string

    @IsNotEmpty()
    @IsMongoId()
    billetera_id: string

    @IsOptional()
    @IsNotEmpty()
    @IsString()
    moneda: string

    @IsOptional()
    @IsNotEmpty()
    @IsDateString()
    fecha_inicio: Date

    @IsOptional()
    @IsNotEmpty()
    @IsDateString()
    fecha_fin: Date
}
