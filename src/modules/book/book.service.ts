import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { BookDto } from './dto/book.dto';
import { Book } from '../../entities/book.entity';
import { OrderService } from '../order/order.service';

@Injectable()
export class BookService {
  constructor(
    @InjectRepository(Book)
    private bookRepository: Repository<Book>,
    @Inject(forwardRef(() => OrderService))
    private orderService: OrderService,
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

  async remove(id: number) {
    await this.orderService.removeByBook(id);
    return this.bookRepository.delete({ id });
  }
}
