import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FlightsModule } from './flights/flights.module';
import { Flights } from './flights/flights.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '417Dongdong',
      database: 'transportation',
      entities: [Flights],
      synchronize: true,
    }),
    FlightsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
