import { PartialType } from '@nestjs/mapped-types';
import { CreateBilleteraDto } from './create-billetera.dto';
import { IsMongoId, IsNotEmpty, IsOptional, IsPositive, IsString } from 'class-validator';

export class UpdateBilleteraDto extends PartialType(CreateBilleteraDto) {
    @IsNotEmpty()
    @IsMongoId()
    _id:string
}


export class AgregarCreditoBilleteraDto {

    @IsNotEmpty()
    @IsMongoId()
    userId:string

    @IsNotEmpty()
    @IsMongoId()
    
    billeteraId:string

    @IsNotEmpty()
    @IsString()
    nombreMoneda:string

    @IsNotEmpty()
    @IsPositive()
    credito:number

    @IsOptional()
    @IsString()
    motivo?:string
}