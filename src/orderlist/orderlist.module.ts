import { Module } from '@nestjs/common';
import { OrderlistService } from './orderlist.service';
import { OrderlistController } from './orderlist.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Orderlist } from './entities/orderlist.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Orderlist])],
  controllers: [OrderlistController],
  providers: [OrderlistService],
})
export class OrderlistModule {}
