import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Book } from './book.entity';
import { User } from './user.entity';

@Entity('order')
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  date: string;

  @ManyToOne(() => Book, (book) => book.order, {
    nullable: false,
  })
  @JoinColumn({ name: 'bookId', referencedColumnName: 'id' })
  book: Book;

  @ManyToOne(() => User, (user) => user.order, { nullable: false })
  @JoinColumn({ name: 'userId', referencedColumnName: 'id' })
  user: User;
}
