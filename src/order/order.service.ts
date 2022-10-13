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

  findAll() {
    return this.orderRepository.find();
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

  async getMenus(id: number) {
    const order = await this.orderRepository.find({
      where: { number: id },
      relations: ['menus'],
    });
    return order[0].menus;
  }

  public async getOrderFromStore(id: number) {
    const qb = this.orderRepository
      .createQueryBuilder('order')
      .leftJoinAndSelect('order.store', 'store')
      .where('store.number = :number', { number: id })
      .leftJoinAndSelect('order.menus', 'menus')
      .select(['order', 'menus'])
      .getMany();
    return qb;
  }
}
