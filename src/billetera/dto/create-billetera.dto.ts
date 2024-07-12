import { Type } from "class-transformer";
import { IsArray, IsMongoId, IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString, ValidateNested } from "class-validator";

class Moneda {


    @IsString()
    nombre: string

    @IsNumber()
    @IsOptional()
    @IsPositive()
    cantidad: number

}

export class CreateBilleteraDto {

    @IsNotEmpty()
    @IsString()
    nombre: string

    @IsNotEmpty()
    @ValidateNested({ each: true })
    @IsArray()
    @Type(() => Moneda)
    monedas: Moneda[];

    @IsNotEmpty()
    @IsString()
    @IsMongoId()
    user_id: string;
}
