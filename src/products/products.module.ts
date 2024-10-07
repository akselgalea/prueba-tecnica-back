import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { StoresModule } from 'src/stores/stores.module';

@Module({
  imports: [TypeOrmModule.forFeature([Product]), StoresModule],
  controllers: [ProductsController],
  providers: [ProductsService]
})
export class ProductsModule { }
