import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseUUIDPipe,
} from '@nestjs/common';

import { BrandsService } from './brands.service';

import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';

@Controller('brands')
export class BrandsController {

  constructor(private readonly brandsService: BrandsService) {}

  @Post()
  create(@Body() createBrandDto: CreateBrandDto): IResponse {
    const data = this.brandsService.create(createBrandDto);

    return {
      status: 200,
      data,
    };
  }

  @Get()
  findAll(): IResponse {
    return {
      status: 200,
      data: this.brandsService.findAll(),
    };
  }

  @Get(':id')
  findOne(@Param('id', new ParseUUIDPipe()) id: string): IResponse {
    return {
      status: 200,
      data: this.brandsService.findOne(id),
    };
  }

  @Patch(':id')
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateBrandDto: UpdateBrandDto,
  ): IResponse {
    const data = this.brandsService.update(id, updateBrandDto);

    return {
      status: 200,
      data,
    };
  }

  @Delete(':id')
  delete(@Param('id', ParseUUIDPipe) id: string): IResponse {
    this.brandsService.remove(id);

    return {
      status: 200,
      data: 'Car deleted',
    };
  }

}
