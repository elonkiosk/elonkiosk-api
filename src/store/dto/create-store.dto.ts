import { IsNumber, IsString } from 'class-validator';
import { Manager } from 'src/manager/entities/manager.entity';

export class CreateStoreDto {
  @IsString()
  name: string;

  @IsNumber()
  manager: Manager;

  @IsString()
  location: string;

  @IsString()
  phone: string;
}
