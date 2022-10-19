import { Order } from 'src/order/entities/order.entity';
import { Store } from 'src/store/entities/store.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Menu {
  @PrimaryGeneratedColumn()
  number: number;

  @ManyToOne(() => Store, (store) => store.menus)
  @JoinColumn()
  store: Store;

  @Column()
  category: string;

  @Column()
  name: string;

  @Column()
  price: number;

  @Column()
  pic: string;

  @Column()
  explanation: string;

  @ManyToMany(() => Order, (order) => order.menus, { onDelete: 'CASCADE' })
  orders: Order[];
}
