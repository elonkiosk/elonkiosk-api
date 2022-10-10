import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMenuDto } from './dto/create-menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';
import { Menu } from './entities/menu.entity';

@Injectable()
export class MenuService {
  constructor(
    @InjectRepository(Menu)
    private menuRepository: Repository<Menu>,
  ) {}

  create(createMenuDto: CreateMenuDto) {
    return this.menuRepository.save(createMenuDto);
    // return 'This action adds a new menu';
  }

  findAll() {
    return this.menuRepository.find();
    // return `This action returns all menu`;
  }

  findOne(id: number) {
    return this.menuRepository.findOneBy({ number: id });
    // return `This action returns a #${id} menu`;
  }

  update(id: number, updateMenuDto: UpdateMenuDto) {
    return this.menuRepository.update({ number: id }, updateMenuDto);
    // return `This action updates a #${id} menu`;
  }

  remove(id: number) {
    return this.menuRepository.delete({ number: id });
    return `This action removes a #${id} menu`;
  }
}
