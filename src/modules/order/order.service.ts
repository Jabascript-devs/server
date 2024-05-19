import {
  forwardRef,
  HttpException,
  HttpStatus,
  Inject,
  Injectable,
} from '@nestjs/common';
import { OrderDto } from './dto/order.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order } from '../../entities/order.entity';
import { User } from '../../entities/user.entity';
import { UserService } from '../user/user.service';
import { BookService } from '../book/book.service';
import { bookState } from '../../entities/book.entity';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Order)
    private orderRepository: Repository<Order>,
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private userService: UserService,
    @Inject(forwardRef(() => BookService))
    private bookService: BookService,
  ) {}

  async create(createOrderDto: OrderDto) {
    const userId = Number(createOrderDto.user);
    const bookId = Number(createOrderDto.book);

    const user = await this.userService.findOne(userId);
    const book = await this.bookService.findOne(bookId);

    if (book.available === true) {
      const deposit = Number(book.deposit);
      let discount = Number(book.discount);

      if (
        user.userCategory === 'student' ||
        user.userCategory === 'pensioner'
      ) {
        discount += 10;
      }

      user.balance = user.balance - deposit + discount;
      await this.userService.update(userId, user);

      book.available = false;
      await this.bookService.update(bookId, book);

      return this.orderRepository.insert(createOrderDto);
    } else {
      throw new HttpException(
        'Book is not available now',
        HttpStatus.FORBIDDEN,
      );
    }
  }

  findAll() {
    return this.orderRepository.find();
  }

  findAllUsersOrders(userId: number) {
    const user = this.userRepository.create();
    user.id = userId;
    return this.orderRepository.findBy({ user });
  }

  findOne(id: number) {
    return this.orderRepository.findOneBy({ id });
  }

  async update(id: number, updateOrderDto: OrderDto) {
    const currentOrder = await this.orderRepository.findOneBy({ id });

    const bookId = Number(currentOrder.book.id);
    const userId = Number(currentOrder.user.id);
    const currentBook = await this.bookService.findOne(bookId);
    const currentUser = await this.userService.findOne(userId);

    if (currentOrder.dateReturned == null) {
      currentBook.available = true;

      const daysToPay = daysBetweenDates(
        currentOrder.dateTaken,
        updateOrderDto.dateReturned,
      );
      let minusBalance = daysToPay * currentBook.dayPrice;

      if (updateOrderDto.state == 'good') {
        currentBook.bookState = bookState.good;
      } else if (updateOrderDto.state == 'bad') {
        currentBook.bookState = bookState.bad;
        minusBalance += 100;
      }

      const dateReturned = parseDate(updateOrderDto.dateReturned);
      const expectedDateReturn = parseDate(currentOrder.expectedDateReturn);
      if (dateReturned > expectedDateReturn) {
        minusBalance += 1000;
      }

      currentUser.balance -= minusBalance;
      await this.userService.update(userId, currentUser);
      await this.bookService.update(bookId, currentBook);

      delete updateOrderDto.state;

      return this.orderRepository.update({ id }, updateOrderDto);
    }
  }

  remove(id: number) {
    return this.orderRepository.delete({ id });
  }

  removeByBook(bookId: number) {
    return this.orderRepository.delete({ book: { id: bookId } });
  }
}

function daysBetweenDates(date1Str, date2Str) {
  // Parse the date strings into Date objects
  const [day1, month1, year1] = date1Str.split('-').map(Number);
  const [day2, month2, year2] = date2Str.split('-').map(Number);

  const date1 = new Date(year1, month1 - 1, day1);
  const date2 = new Date(year2, month2 - 1, day2);

  // Calculate the difference in time
  const timeDifference = Math.abs(date2.getTime() - date1.getTime());

  // Convert the time difference from milliseconds to days
  return Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
}

function parseDate(dateStr) {
  const [day, month, year] = dateStr.split('-').map(Number);
  return new Date(year, month - 1, day); // month is 0-based
}
