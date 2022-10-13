import { Store } from 'src/store/entities/store.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

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

  @OneToMany(() => Store, (store) => store.manager)
  stores: Store[];
}
