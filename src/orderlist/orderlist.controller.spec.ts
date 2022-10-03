import { Test, TestingModule } from '@nestjs/testing';
import { OrderlistController } from './orderlist.controller';
import { OrderlistService } from './orderlist.service';

describe('OrderlistController', () => {
  let controller: OrderlistController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrderlistController],
      providers: [OrderlistService],
    }).compile();

    controller = module.get<OrderlistController>(OrderlistController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
