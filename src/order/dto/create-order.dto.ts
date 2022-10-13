import { Store } from 'src/store/entities/store.entity';

export class CreateOrderDto {
  store: Store;
  group: string;
  menus: [];
  total: number;
  method?: string;
}
