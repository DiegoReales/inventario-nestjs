import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductCreateDto } from './dtos/product-create.dto';
import { ProductUpdateDto } from './dtos/product-update.dto';
import { ApiTags, ApiResponse } from '@nestjs/swagger';

@ApiTags('productos')
@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
	@ApiResponse({ status: 201, description: 'Producto creado exitosamente.' })
  @ApiResponse({ status: 400, description: 'Error en la validación de los datos.' })
  create(@Body() productCreateDto: ProductCreateDto) {
    return this.productsService.create(productCreateDto);
  }

  @Get()
	@ApiResponse({ status: 200, description: 'Lista de productos.' })
  findAll() {
    return this.productsService.findAll();
  }

  @Get(':id')
	@ApiResponse({ status: 200, description: 'Detalles del producto.' })
  @ApiResponse({ status: 404, description: 'Producto no encontrado.' })
  findOne(@Param('id') id: string) {
    return this.productsService.findOne(+id);
  }

  @Put(':id')
	@ApiResponse({ status: 200, description: 'Producto actualizado exitosamente.' })
  @ApiResponse({ status: 404, description: 'Producto no encontrado.' })
  update(@Param('id') id: string, @Body() productUpdateDto: ProductUpdateDto) {
    return this.productsService.update(+id, productUpdateDto);
  }

  @Delete(':id')
	@ApiResponse({ status: 200, description: 'Producto eliminado exitosamente.' })
  @ApiResponse({ status: 404, description: 'Producto no encontrado.' })
  remove(@Param('id') id: string) {
    return this.productsService.remove(+id);
  }
}
