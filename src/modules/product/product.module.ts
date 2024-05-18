import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { Product } from '../../models/product.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Product])], // Importa el repositorio de TypeORM para la entidad Product
  controllers: [ProductController], // Controlador para manejar las solicitudes relacionadas con los productos
  providers: [ProductService], // Servicio para realizar operaciones relacionadas con los productos
  exports: [ProductService], // Exporta el servicio para que esté disponible para otros módulos que lo importen
})
export class ProductModule {}
