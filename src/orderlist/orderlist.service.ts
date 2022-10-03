import { Injectable } from '@nestjs/common';
import { CreateOrderlistDto } from './dto/create-orderlist.dto';
import { UpdateOrderlistDto } from './dto/update-orderlist.dto';

@Injectable()
export class OrderlistService {
  create(createOrderlistDto: CreateOrderlistDto) {
    return 'This action adds a new orderlist';
  }

  findAll() {
    return `This action returns all orderlist`;
  }

  findOne(id: number) {
    const test_data = {
      number: 1,
      time: new Date(),
      group: 'group1',
      menus: [
        {
          name: 'menu1',
          price: 1000,
          description: 'description1',
          image: 'image1',
        },
        {
          name: 'menu2',
          price: 2000,
          description: 'description2',
          image: 'image2',
        },
      ],
      quantity: 1,
      status: 'status1',
    }
    return test_data;
    // return `This action returns a #${id} orderlist`;
  }

  update(id: number, updateOrderlistDto: UpdateOrderlistDto) {
    return `This action updates a #${id} orderlist`;
  }

  remove(id: number) {
    return `This action removes a #${id} orderlist`;
  }
}
