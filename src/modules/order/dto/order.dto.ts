import { IsString, IsInt } from 'class-validator';
import { Book } from '../../../entities/book.entity';
import { User } from '../../../entities/user.entity';

export class OrderDto {
  @IsInt()
  id: number;

  @IsString()
  date: string;

  book: Book;

  user: User;
}
