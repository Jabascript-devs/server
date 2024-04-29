import { Injectable } from '@nestjs/common';
import { OrderDto } from './dto/order.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order } from '../../entities/order.entity';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Order)
    private orderRepository: Repository<Order>,
  ) {}

  create(createOrderDto: OrderDto) {
    return this.orderRepository.insert(createOrderDto);
  }

  findAll() {
    return this.orderRepository.find();
  }

  findOne(id: number) {
    return this.orderRepository.findOneBy({ id });
  }

  update(id: number, updateOrderDto: OrderDto) {
    return this.orderRepository.update({ id }, updateOrderDto);
  }

  remove(id: number) {
    return this.orderRepository.delete({ id });
  }
}
