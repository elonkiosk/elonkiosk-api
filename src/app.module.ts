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
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
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
