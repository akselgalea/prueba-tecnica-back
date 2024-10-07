import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Repository } from 'typeorm';
import { WritableStreamDefaultController } from 'node:stream/web';
import { CreateProductDto } from './dto/create-product.dto'
import { StoresService } from 'src/stores/stores.service';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product) private productRepository: Repository<Product>,
    private storeService: StoresService
  ) { }

  findAll() {
    return this.productRepository.find()
  }

  findOne(id: number) {
    return this.productRepository.find({
      where: {
        id
      },
      relations: {
        store: true,
        purchases: true
      }
    })
  }

  async create(data: CreateProductDto) {
    const store = await this.storeService.findOne(data.storeId)

    if (!store) {
      throw new NotFoundException("Store not found")
    }

    return this.productRepository.save({ ...data, store })
  }

  async update(id: number, data: UpdateProductDto) {
    const product = await this.productRepository.findOneBy({
      id
    })

    if (!product) {
      throw new NotFoundException("product not found")
    }

    return this.productRepository.save({
      ...product,
      ...data
    })
  }

  async delete(id: number) {
    const product = await this.productRepository.findOneBy({
      id
    })

    if (!product) {
      throw new NotFoundException("product not found")
    }

    return this.productRepository.softDelete(id)
  }
}
