import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Order } from './entities/order.entity';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Order)
    private readonly orderRepository: Repository<Order>,
  ) {}

  create(createOrderDto: CreateOrderDto) {
    return this.orderRepository.save(createOrderDto);
  }

  async findAll() {
    return await this.orderRepository.find({
      relations: ['menus'],
    });
  }

  findOne(id: number) {
    return this.orderRepository.findOneBy({ number: id });
  }

  update(id: number, updateOrderDto: UpdateOrderDto) {
    return this.orderRepository.update({ number: id }, updateOrderDto);
  }

  remove(id: number) {
    return this.orderRepository.delete({ number: id });
  }
}
