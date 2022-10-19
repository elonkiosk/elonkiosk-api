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
  }

  findAll() {
    return this.managerRepository.find();
  }

  findOne(id: string) {
    return this.managerRepository.findOneBy({ id });
  }

  update(id: string, updateManagerDto: UpdateManagerDto) {
    return this.managerRepository.update({ id: id }, updateManagerDto);
  }

  remove(id: string) {
    return this.managerRepository.delete({ id: id });
  }

  async login(loginManagerDto: LoginManagerDto) {
    const { id, password } = loginManagerDto;
    const manager = await this.managerRepository.findOneBy({ id: id });
    if (manager && manager.password === password) {
      return true;
    } else {
      return false;
    }
  
  async getStore(id: string) {
    const manager = await this.managerRepository.find({
      where: { id: id },
      relations: ['store'],
    });
    return manager[0].store.number;
}
