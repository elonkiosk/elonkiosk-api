import { Menu } from 'src/menu/entities/menu.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Orderlist {
  @PrimaryGeneratedColumn()
  number: number;

  @CreateDateColumn()
  time: Date;

  @Column()
  group: string;

  @OneToOne(() => Menu)
  @JoinColumn()
  menus: [Menu];

  @Column()
  quantity: number;

  // TODO: total price = menu.price * quantity
  // @Column()
  // total: number;

  @Column()
  status: string;
}
