import { Injectable } from '@nestjs/common';

interface IData {
  id: number;
  brand: string;
  model: string;
}

@Injectable()
export class CarsService {

  private cars: IData[] = [
    {
      id: 1,
      brand: 'Toyota',
      model: 'Corolla',
    },
    {
      id: 2,
      brand: 'Honda',
      model: 'Civic',
    },
    {
      id: 3,
      brand: 'Jeep',
      model: 'Cherokee',
    },
  ];

  public get getCars(): IData[] {
    return this.cars;
  }

  public findById(id: number): IData {
    return this.cars.find(car => car.id === +id);
  }

}
