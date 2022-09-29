import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Manager {
  @PrimaryGeneratedColumn()
  managerNunber: number;

  @Column()
  managerName: string;

  @Column()
  managerId: string;

  @Column()
  managerPassword: string;
}
