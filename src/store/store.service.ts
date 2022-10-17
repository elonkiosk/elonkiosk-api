import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateStoreDto } from './dto/create-store.dto';
import { UpdateStoreDto } from './dto/update-store.dto';
import { Store } from './entities/store.entity';

@Injectable()
export class StoreService {
  constructor(
    @InjectRepository(Store)
    private storeRepository: Repository<Store>,
  ) {}

  create(createStoreDto: CreateStoreDto) {
    return this.storeRepository.save(createStoreDto);
    // return 'This action adds a new store';
  }

  findAll() {
    return this.storeRepository.find();
    // return `This action returns all store`;
  }

  findOne(id: number) {
    return this.storeRepository.findOneBy({ number: id });
    // return `This action returns a #${id} store`;
  }

  update(id: number, updateStoreDto: UpdateStoreDto) {
    return this.storeRepository.update({ number: id }, updateStoreDto);
    // return `This action updates a #${id} store`;
  }

  remove(id: number) {
    return this.storeRepository.delete({ number: id });
    // return `This action removes a #${id} store`;
  }

  async getMenus(id: number) {
    const store = await this.storeRepository.find({
      where: { number: id },
      relations: ['menus'],
    });
    return store[0].menus;
  }

  async getCategorySet(id: number) {
    const store = await this.storeRepository.find({
      where: { number: id },
      relations: ['menus'],
    });
    const categorySet = new Set();
    store[0].menus.forEach((menu) => categorySet.add(menu.category));
    return {
      category: Array.from(categorySet),
    };
  }

  async getMenusByCategory(id: number, category: string) {
    const store = await this.storeRepository.find({
      where: { number: id },
      relations: ['menus'],
    });
    return store[0].menus.filter((menu) => menu.category === category);
  }
}
