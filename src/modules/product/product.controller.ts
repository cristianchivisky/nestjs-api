import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from '../../models/product.entity';
import { CreateProductDto, UpdateProductDto } from './product.dto';
import { ApiTags, ApiOperation, ApiParam } from '@nestjs/swagger';

@ApiTags('Products') // Etiqueta para agrupar endpoints relacionados bajo la categoría 'Products'
@Controller('products') // Define la ruta base para todos los endpoints de este controlador
export class ProductController {
  constructor(private readonly productService: ProductService) {} // Inyección del servicio ProductService

  @Get() // Endpoint HTTP GET para obtener todos los productos
  @ApiOperation({ summary: 'Obtener todos los productos' }) // Documenta el endpoint con un resumen claro
  async findAll(): Promise<Product[]> { // Método asincrónico para manejar la solicitud
    return this.productService.findAll(); // Devuelve todos los productos utilizando el servicio ProductService
  }

  @Get(':id') // Endpoint HTTP GET para obtener un producto por su ID
  @ApiOperation({ summary: 'Obtener producto por ID' }) // Documenta el endpoint con un resumen claro
  @ApiParam({ name: 'id', description: 'ID del producto' }) // Documenta el parámetro del endpoint
  async findOne(@Param('id') id: number): Promise<Product> { // Método asincrónico para manejar la solicitud, recibe el parámetro 'id'
    return this.productService.findOneById(id); // Devuelve el producto con el ID proporcionado utilizando el servicio ProductService
  }

  @Post() // Endpoint HTTP POST para crear un nuevo producto
  @ApiOperation({ summary: 'Crear nuevo producto' }) // Documenta el endpoint con un resumen claro
  async create(@Body() createProductDto: CreateProductDto): Promise<Product> { // Método asincrónico para manejar la solicitud, recibe los datos del producto a crear en el cuerpo de la solicitud
    return this.productService.create(createProductDto); // Crea un nuevo producto utilizando el servicio ProductService y devuelve el producto creado
  }

  @Put(':id') // Endpoint HTTP PUT para actualizar un producto por su ID
  async update(@Param('id') id: number, @Body() updateProductDto: UpdateProductDto): Promise<Product> { // Método asincrónico para manejar la solicitud, recibe el parámetro 'id' y los datos actualizados del producto en el cuerpo de la solicitud
    return this.productService.update(id, updateProductDto); // Actualiza el producto con el ID proporcionado utilizando el servicio ProductService y devuelve el producto actualizado
  }

  @Delete(':id') // Endpoint HTTP DELETE para eliminar un producto por su ID
  async remove(@Param('id') id: number): Promise<void> { // Método asincrónico para manejar la solicitud, recibe el parámetro 'id'
    return this.productService.remove(id); // Elimina el producto con el ID proporcionado utilizando el servicio ProductService
  }
}

