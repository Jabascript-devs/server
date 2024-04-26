import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { BooksController } from './books.controller';
import { BooksService } from './books.service';
import { Book } from '../../entities/book.entity';
import { Author } from '../../entities/author.entity';
import { Order } from '../../entities/order.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Book, Author, Order])],
  controllers: [BooksController],
  providers: [BooksService],
})
export class BooksModule {}
