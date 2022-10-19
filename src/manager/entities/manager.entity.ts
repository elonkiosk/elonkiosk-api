import { Store } from 'src/store/entities/store.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Manager {
  @PrimaryGeneratedColumn()
  number: number;

  @Column()
  name: string;

  @Column()
  id: string;

  @Column()
  password: string;

  @OneToOne(() => Store, (store) => store.manager)
  @JoinColumn()
  store: Store;
}
