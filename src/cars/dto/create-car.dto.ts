import { IsString } from 'class-validator';

export class CreateCarDto {

  @IsString({ message: 'The brand most be a cool string' })
  private readonly brand: string;

  @IsString()
  private readonly model: string;

}
