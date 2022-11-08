import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  ParseUUIDPipe,
  Patch,
  Post,
} from '@nestjs/common';

import { CarsService } from './cars.service';

import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-cat.dto';

@Controller('cars')
export class CarsController {

  constructor(private readonly _carsService: CarsService) {}

  @Get()
  getAllCars(): IResponse {
    return {
      status: 200,
      data: this._carsService.getCars,
    };
  }

  @Get(':id')
  getCarById(@Param('id', new ParseUUIDPipe({ version: '4' })) id: string): IResponse {
    return {
      status: 200,
      data: this._carsService.findById(id),
    };
  }

  @Post()
  createCar(@Body() createCarDto: CreateCarDto): IResponse {
    const data = this._carsService.createCar(createCarDto);

    return {
      status: 200,
      data,
    };
  }

  @Patch(':id')
  updateCar(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateCarDto: UpdateCarDto,
  ): IResponse {
    const data = this._carsService.updateCar(id, updateCarDto);

    return {
      status: 200,
      data,
    };
  }

  @Delete(':id')
  deleteCar(@Param('id', ParseIntPipe) id: number): IResponse {
    return {
      status: 200,
      data: 'Car deleted',
    };
  }

}
