import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Book } from './book.entity';
import { User } from './user.entity';

@Entity('user_order')
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'date_taken' })
  dateTaken: string;

  @Column({ name: 'expected_date_return', nullable: true })
  expectedDateReturn: string;

  @Column({ name: 'date_returned', nullable: true })
  dateReturned?: string;

  @ManyToOne(() => Book, (book) => book.order, {
    nullable: false,
    eager: true,
  })
  @JoinColumn({ name: 'bookId', referencedColumnName: 'id' })
  book: Book;

  @ManyToOne(() => User, (user) => user.order, {
    nullable: false,
    eager: true,
  })
  @JoinColumn({ name: 'userId', referencedColumnName: 'id' })
  user: User;
}
