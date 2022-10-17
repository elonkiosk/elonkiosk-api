import { Manager } from 'src/manager/entities/manager.entity';
import { Menu } from 'src/menu/entities/menu.entity';
import { Order } from 'src/order/entities/order.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Store {
  @PrimaryGeneratedColumn()
  number: number;

  @Column()
  name: string;

  @ManyToOne(() => Manager, (manager) => manager.stores)
  @JoinColumn()
  manager: Manager;

  @Column()
  location: string;

  @Column()
  phone: string;

  @OneToMany(() => Menu, (menu) => menu.store)
  menus: Menu[];

  @OneToMany(() => Order, (order) => order.store)
  @JoinColumn()
  orders: Order[];
}
