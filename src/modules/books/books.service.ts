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

  create(createBookDto: BookDto) {
    return this.bookRepository.insert(createBookDto);
  }

  findAll() {
    return this.bookRepository.find();
  }

  findOne(id: number) {
    return this.bookRepository.findOneBy({ id });
  }

  update(id: number, updateBookDto: BookDto) {
    return this.bookRepository.update({ id }, updateBookDto);
  }

  remove(id: number) {
    return this.bookRepository.delete({ id });
  }
}
