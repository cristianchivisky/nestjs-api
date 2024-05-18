import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, FindOneOptions } from 'typeorm';
import { Product } from '../../models/product.entity';
import { CreateProductDto, UpdateProductDto } from './product.dto';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>, // Repositorio de TypeORM para la entidad Product
  ) {}

  // Método para buscar y devolver todos los productos
  async findAll(): Promise<Product[]> {
    return await this.productRepository.find();
  }

  // Método para buscar un producto por su ID
  async findOneById(id: number): Promise<Product | null> {
    const options: FindOneOptions<Product> = { where: { id } };
    const product = await this.productRepository.findOne(options);
    if (!product) {
      throw new NotFoundException('Producto no encontrado');
    }
    return product;
  }

  // Método para crear un nuevo producto
  async create(createProductDto: CreateProductDto): Promise<Product> {
    const newProduct = this.productRepository.create(createProductDto);
    return await this.productRepository.save(newProduct);
  }

  // Método para actualizar un producto existente
  async update(id: number, updateProductDto: UpdateProductDto): Promise<Product> {
    const product = await this.findOneById(id); // Busca el producto por su ID
    Object.assign(product, updateProductDto); // Copia las propiedades del DTO de actualización al objeto del producto
    return await this.productRepository.save(product); // Guarda los cambios en la base de datos
  }

  // Método para eliminar un producto por su ID
  async remove(id: number): Promise<void> {
    await this.productRepository.delete(id);
  }
}
