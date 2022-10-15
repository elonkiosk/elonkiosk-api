import { Store } from 'src/store/entities/store.entity';

export class CreateOrderDto {
  store: Store;
  menus: [];
  total: number;
  method?: string;
}
