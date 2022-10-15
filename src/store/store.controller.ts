import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { StoreService } from './store.service';
import { CreateStoreDto } from './dto/create-store.dto';
import { UpdateStoreDto } from './dto/update-store.dto';

@Controller('api/store')
export class StoreController {
  constructor(private readonly storeService: StoreService) {}

  @Post()
  create(@Body() createStoreDto: CreateStoreDto) {
    return this.storeService.create(createStoreDto);
  }

  @Get()
  findAll() {
    return this.storeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.storeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStoreDto: UpdateStoreDto) {
    return this.storeService.update(+id, updateStoreDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.storeService.remove(+id);
  }

  @Get(':id/menus')
  getMenus(@Param('id') id: string) {
    return this.storeService.getMenus(+id);
  }

  @Get(':id/category')
  getCategorySet(@Param('id') id: string) {
    return this.storeService.getCategorySet(+id);
  }

  @Get(':id/menus/:category')
  getMenusByCategory(
    @Param('id') id: string,
    @Param('category') category: string,
  ) {
    return this.storeService.getMenusByCategory(+id, category);
  }
}
