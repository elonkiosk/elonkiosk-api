import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateManagerDto } from './dto/create-manager.dto';
import { LoginManagerDto } from './dto/login-manger.dto';
import { UpdateManagerDto } from './dto/update-manager.dto';
import { Manager } from './entities/manager.entity';

@Injectable()
export class ManagerService {
  constructor(
    @InjectRepository(Manager)
    private managerRepository: Repository<Manager>,
  ) {}

  create(createManagerDto: CreateManagerDto) {
    return this.managerRepository.save(createManagerDto);
    // return 'This action adds a new manager';
  }

  findAll() {
    return this.managerRepository.find();
    // return `This action returns all manager`;
  }

  findOne(id: string) {
    return this.managerRepository.findOneBy({ id });
    // return `This action returns a #${id} manager`;
  }

  update(id: string, updateManagerDto: UpdateManagerDto) {
    return this.managerRepository.update({ id: id }, updateManagerDto);
    // return `This action updates a #${id} manager`;
  }

  remove(id: string) {
    return this.managerRepository.delete({ id: id });
    // return `This action removes a #${id} manager`;
  }

  async login(loginManagerDto: LoginManagerDto) {
    const { id, password } = loginManagerDto;
    const manager = await this.managerRepository.findOneBy({ id: id });
    if (manager && manager.password === password) {
      return true;
    } else {
      return false;
    }
  }
}
