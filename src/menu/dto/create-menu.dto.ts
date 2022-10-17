import { IsNumber, IsString } from 'class-validator';
import { Store } from 'src/store/entities/store.entity';

export class CreateMenuDto {
  @IsNumber()
  store: Store;

  @IsString()
  category: string;

  @IsString()
  name: string;

  @IsNumber()
  price: number;

  @IsString()
  explanation: string;
}
