import { Injectable, NotFoundException } from '@nestjs/common';

import { v4 as uuid } from 'uuid';

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

}
