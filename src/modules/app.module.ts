import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

import { BookModule } from './book/book.module';
import { UserModule } from './user/user.module';
import { AuthorModule } from './author/author.module';
import { OrderModule } from './order/order.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env.development.local', '.env'],
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DATABASE_HOST,
      port: Number(process.env.DATABASE_PORT),
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      // entities: [],
      autoLoadEntities: true,
      synchronize: true,
    }),
    BookModule,
    UserModule,
    AuthorModule,
    OrderModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
