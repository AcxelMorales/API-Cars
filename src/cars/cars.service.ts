import { Injectable, NotFoundException } from '@nestjs/common';

import { v4 as uuid } from 'uuid';
import { CreateCarDto } from './dto/create-car.dto';

@Injectable()
export class CarsService {

  private cars: IData[] = [
    {
      id: uuid(),
      brand: 'Toyota',
      model: 'Corolla',
    },
    {
      id: uuid(),
      brand: 'Honda',
      model: 'Civic',
    },
    {
      id: uuid(),
      brand: 'Jeep',
      model: 'Cherokee',
    },
  ];

  public get getCars(): IData[] {
    return this.cars;
  }

  public findById(id: string): IData {
    const car = this.cars.find(car => car.id == id);
    if (!car) throw new NotFoundException(`Car with ID ${id} not found`);
    return car;
  }

  public createCar({ brand, model }: CreateCarDto): IData {
    const car: IData = {
      id: uuid(),
      brand,
      model
    };

    this.cars.push(car);

    return car
  }

}
