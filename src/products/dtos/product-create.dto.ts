import { IsString, IsNotEmpty, IsOptional, IsInt, IsPositive, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ProductCreateDto {

	@ApiProperty({ description: 'Nombre del producto', example: 'Silla' })
  @IsString({ message: 'El nombre debe ser una cadena de texto.' })
  @IsNotEmpty({ message: 'El nombre es obligatorio.' })
  readonly nombre: string;

	@ApiProperty({ description: 'Descripción del producto', example: 'Silla cómoda', required: false })
  @IsString({ message: 'La descripción debe ser una cadena de texto.' })
  @IsOptional()
  readonly descripcion?: string;

	@ApiProperty({ description: 'Precio del producto', example: 90.01 })
  @IsNumber({}, { message: 'El precio debe ser un número.' })
  @IsPositive({ message: 'El precio debe ser un valor positivo.' })
  readonly precio: number;

	@ApiProperty({ description: 'Cantidad del producto', example: 50 })
  @IsInt({ message: 'La cantidad debe ser un número entero.' })
  @IsPositive({ message: 'La cantidad debe ser un valor positivo.' })
  readonly cantidad: number;
}
