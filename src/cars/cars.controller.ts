import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';

import { CarsService } from './cars.service';

interface IResponse {
  status: number;
  data: any;
}

@Controller('cars')
export class CarsController {

  constructor(private readonly _carsService: CarsService) { }

  @Get()
  getAllCars(): IResponse {
    return {
      status: 200,
      data: this._carsService.getCars,
    };
  }

  @Get(':id')
  getCarById(@Param('id', ParseIntPipe) id: number): IResponse {
    console.log(id)
    return {
      status: 200,
      data: this._carsService.findById(id),
    };
  }

}
