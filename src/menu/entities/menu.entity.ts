import { Store } from 'src/store/entities/store.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Menu {
  @PrimaryGeneratedColumn()
  number: number;

  @ManyToOne(() => Store, (store) => store.menus)
  store: Store;

  @Column()
  category: string;

  @Column()
  name: string;

  @Column()
  price: number;

  @Column()
  explanation: string;
}
