import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
}
