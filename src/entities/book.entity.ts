import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Author } from './author.entity';
import { Order } from './order.entity';

export enum bookState {
  good = 'good',
  bad = 'bad',
}

@Entity('book')
export class Book {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false, unique: true })
  name: string;

  @Column({ type: 'float' })
  deposit: number;

  @Column({ name: 'day_price', type: 'float', nullable: false })
  dayPrice: number;

  @Column()
  discount: number;

  @Column({ nullable: false })
  available: boolean;

  @Column({ name: 'state', nullable: false, type: 'enum', enum: bookState })
  bookState: bookState;

  @ManyToOne(() => Author, (author) => author.book, {
    nullable: false,
  })
  author: Author;

  @OneToMany(() => Order, (order) => order.book)
  order: Order[];
}
