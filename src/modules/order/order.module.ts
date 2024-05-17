import { forwardRef, Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from '../../entities/order.entity';
import { Book } from '../../entities/book.entity';
import { User } from '../../entities/user.entity';
import { UserModule } from '../user/user.module';
import { BookModule } from '../book/book.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Order, Book, User]),
    forwardRef(() => UserModule),
    forwardRef(() => BookModule),
  ],
  controllers: [OrderController],
  providers: [OrderService],
  exports: [OrderService],
})
export class OrderModule {}
