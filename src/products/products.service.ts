import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';
import { ProductUpdateDto } from './dtos/product-update.dto';
import { ProductCreateDto } from './dtos/product-create.dto';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly productsRepository: Repository<Product>,
  ) {}

  create(productCreateDto: ProductCreateDto) {
		const productData = { ...productCreateDto } as Partial<Product>;
    const product = this.productsRepository.create(productData);
    return this.productsRepository.save(product);
  }

  findAll() {
    return this.productsRepository.find();
  }

  async findOne(id: number) {
    const product = await this.productsRepository.findOne({ where: { id } });
    if (!product) throw new NotFoundException('Producto no encontrado');
    return product;
  }

  async update(id: number, productUpdateDto: ProductUpdateDto) {
		const productData = { ...productUpdateDto } as Partial<Product>;
    await this.productsRepository.update(id, productData);
    return this.findOne(id);
  }

  async remove(id: number) {
    const result = await this.productsRepository.delete(id);
    if (result.affected === 0) throw new NotFoundException('Producto no encontrado');
  }
}
