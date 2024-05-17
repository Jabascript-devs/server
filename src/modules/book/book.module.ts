import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookController } from './book.controller';
import { BookService } from './book.service';
import { Book } from '../../entities/book.entity';
import { Author } from '../../entities/author.entity';
import { OrderModule } from '../order/order.module';
import { Order } from '../../entities/order.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Book, Author, Order]),
    forwardRef(() => OrderModule),
  ],
  controllers: [BookController],
  providers: [BookService],
  exports: [BookService],
})
export class BookModule {}
