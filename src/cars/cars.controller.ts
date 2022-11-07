import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';

import { CarsService } from './cars.service';

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
  getCarById(@Param('id', ParseIntPipe) id: number): IResponse {
    return {
      status: 200,
      data: this._carsService.findById(id),
    };
  }

  @Post()
  createCar(@Body() body: IBody): IResponse {
    return {
      status: 200,
      data: 'Car created',
    };
  }

  @Patch(':id')
  updateCar(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: IBody,
  ): IResponse {
    return {
      status: 200,
      data: 'Car updated',
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
