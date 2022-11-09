import { Injectable, NotFoundException } from '@nestjs/common';

import { v4 as uuid } from 'uuid';

import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';

import { Brand } from './entities/brand.entity';

@Injectable()
export class BrandsService {

  private brands: Brand[] = [];

  create({ name }: CreateBrandDto): Brand {
    const brand: Brand = {
      id: uuid(),
      name: name.toLocaleLowerCase(),
      createdAt: new Date().getTime(),
    };

    this.brands.push(brand);

    return brand;
  }

  findAll(): Brand[] {
    return this.brands;
  }

  findOne(id: string): Brand {
    const brand = this.brands.find(brand => brand.id == id);
    if (!brand) throw new NotFoundException(`Brand with ID "${id}" not found`);
    return brand;
  }

  update(id: string, updateBrandDto: UpdateBrandDto): Brand {
    let brandDB = this.findOne(id);

    this.brands = this.brands.map(b => {
      if (b.id === id) {
        brandDB.createdAt = new Date().getTime();
        brandDB = {
          ...brandDB,
          ...updateBrandDto
        };

        return brandDB;
      }
    });

    return brandDB;
  }

  remove(id: string): void {
    this.brands = this.brands.filter(b => b.id !== id);
  }

  fillBrandsWithSeedData(brands: Brand[]): void {
    this.brands = brands;
  }

}
