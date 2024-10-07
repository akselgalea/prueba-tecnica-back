import { Controller, Get, Param } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Store } from './entities/store.entity';
import { Repository } from 'typeorm';
import { StoresService } from './stores.service';

@Controller('stores')
export class StoresController {
  constructor(private storeService: StoresService) { }

  @Get()
  findAll() {
    return this.storeService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.storeService.findOne(id)
  }
}
