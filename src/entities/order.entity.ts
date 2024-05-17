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

  @Column({ name: 'date taken' })
  dateTaken: string;

  @Column({ name: 'date returned', nullable: true })
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
