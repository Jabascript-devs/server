import { IsString, IsInt, IsOptional } from 'class-validator';
import { Book } from '../../../entities/book.entity';
import { User } from '../../../entities/user.entity';

export class OrderDto {
  @IsInt()
  id: number;

  @IsString()
  dateTaken: string;

  @IsString()
  @IsOptional()
  dateReturned?: string;

  book: Book;

  user: User;

  state?: string;
}
