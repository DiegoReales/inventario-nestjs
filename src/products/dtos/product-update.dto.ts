import { IsString, IsOptional, IsInt, IsPositive, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ProductUpdateDto {

  @ApiProperty({ description: 'Nombre del producto', example: 'Silla', required: false  })
  @IsString({ message: 'El nombre debe ser una cadena de texto.' })
  @IsOptional()
  readonly nombre?: string;

  @ApiProperty({ description: 'Descripción del producto', example: 'Silla cómoda', required: false })
  @IsString({ message: 'La descripción debe ser una cadena de texto.' })
  @IsOptional()
  readonly descripcion?: string;

  @ApiProperty({ description: 'Precio del producto', example: 90.01, required: false  })
  @IsNumber({}, { message: 'El precio debe ser un número.' })
  @IsOptional()
  @IsPositive({ message: 'El precio debe ser un valor positivo.' })
  readonly precio?: number;

  @ApiProperty({ description: 'Cantidad del producto', example: 50, required: false })
  @IsInt({ message: 'La cantidad debe ser un número entero.' })
  @IsOptional()
  @IsPositive({ message: 'La cantidad debe ser un valor positivo.' })
  readonly cantidad?: number;
}
