import { IsString, IsInt, IsNumber, IsBoolean } from 'class-validator';
import { bookState } from '../../../entities/book.entity';
import { Author } from 'src/entities/author.entity';

export class BookDto {
  @IsInt()
  id?: number;

  @IsString()
  name?: string;

  @IsString()
  image?: string;

  @IsNumber()
  deposit?: number;

  @IsNumber()
  dayPrice?: number;

  @IsNumber()
  discount?: number;

  @IsBoolean()
  available?: boolean;

  bookState?: bookState;

  author?: Author;
}
