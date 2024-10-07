import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ProductsService } from './products.service';
import { UpdateProductDto } from './dto/update-product.dto';
import { CreateProductDto } from './dto/create-product.dto';

@Controller('products')
export class ProductsController {
  constructor(private productService: ProductsService) { }

  @Get()
  findAll() {
    return this.productService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.productService.findOne(id)
  }

  @Post()
  create(@Body() body: CreateProductDto) {
    return this.productService.create(body)
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() body: UpdateProductDto) {
    return this.productService.update(id, body)
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.productService.delete(id)
  }
}
