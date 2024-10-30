import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'admin', 
      password: '123456', 
      database: 'acme', 
      // schema: 'inventory',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }), ProductsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
