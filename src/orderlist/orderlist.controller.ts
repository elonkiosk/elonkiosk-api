import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OrderlistService } from './orderlist.service';
import { CreateOrderlistDto } from './dto/create-orderlist.dto';
import { UpdateOrderlistDto } from './dto/update-orderlist.dto';

@Controller('orderlist')
export class OrderlistController {
  constructor(private readonly orderlistService: OrderlistService) {}

  @Post()
  create(@Body() createOrderlistDto: CreateOrderlistDto) {
    return this.orderlistService.create(createOrderlistDto);
  }

  @Get()
  findAll() {
    return this.orderlistService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.orderlistService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOrderlistDto: UpdateOrderlistDto) {
    return this.orderlistService.update(+id, updateOrderlistDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.orderlistService.remove(+id);
  }
}
