import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMenuDto } from './dto/create-menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';
import { Menu } from './entities/menu.entity';
import * as AWS from 'aws-sdk';

@Injectable()
export class MenuService {
  s3 = new AWS.S3({
    accessKeyId: 'AKIAUTXKF77DJHEYIJSR',
    secretAccessKey: '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',
    region: 'ap-northeast-2',
  });

  constructor(
    @InjectRepository(Menu)
    private menuRepository: Repository<Menu>,
  ) {}

  create(createMenuDto: CreateMenuDto) {
    return this.menuRepository.save(createMenuDto);
  }

  findAll() {
    return this.menuRepository.find();
  }

  findOne(id: number) {
    return this.menuRepository.findOneBy({ number: id });
  }

  update(id: number, updateMenuDto: UpdateMenuDto) {
    return this.menuRepository.update({ number: id }, updateMenuDto);
  }

  remove(id: number) {
    return this.menuRepository.delete({ number: id });
  }

  async uploadImage(file: Express.Multer.File) {
    const AWS_S3_BUCKET_NAME = 'elon-kiosk-menu-img-bucket';
    const params = {
      Bucket: AWS_S3_BUCKET_NAME,
      Key: String(file.originalname),
      Body: file.buffer,
    };
    try {
      const data = await this.s3.upload(params).promise();
      return data;
    } catch (error) {
      console.log(error);
    }
  }
}
