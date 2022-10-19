import { Menu } from 'src/menu/entities/menu.entity';
import { Store } from 'src/store/entities/store.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  number: number;

  @ManyToOne(() => Store, (store) => store.orders)
  @JoinColumn()
  store: Store;

  @ManyToMany(() => Menu, (menu) => menu.orders, { onDelete: 'CASCADE' })
  @JoinTable()
  menus: Menu[];

  @Column({ default: 'Elon-Pay' })
  method: string;

  @Column()
  total: number;

  @CreateDateColumn()
  time: Date;

  @Column({ default: 'waiting' })
  status: string;
}
