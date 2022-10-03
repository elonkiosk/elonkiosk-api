import { Manager } from 'src/manager/entities/manager.entity';
import { Menu } from 'src/menu/entities/menu.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Store {
  @PrimaryGeneratedColumn()
  number: number;

  @Column()
  name: string;

  @OneToOne(() => Manager)
  @JoinColumn()
  manager: Manager;

  @Column()
  location: string;

  @Column()
  phone: string;

  @OneToMany(() => Menu, (menu) => menu.store)
  menus: Menu[];
}
