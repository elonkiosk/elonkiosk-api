import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { ManagerModule } from './manager/manager.module';
import { StoreModule } from './store/store.module';
import { MenuModule } from './menu/menu.module';
import { OrderlistModule } from './orderlist/orderlist.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '3412',
      database: 'test',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
      autoLoadEntities: true,
    }),
    ManagerModule,
    StoreModule,
    MenuModule,
    OrderlistModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
