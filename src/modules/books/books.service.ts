import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { BookDto } from './dto/book.dto';
import { Book } from '../../entities/book.entity';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Book)
    private bookRepository: Repository<Book>,
  ) {}

  async getBooks(): Promise<BookDto[]> {
    return this.bookRepository.find();
  }
}
