import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import {ConfigModule} from '@nestjs/config';
import { DataPointsModule } from './data-points/data-points.module';
import { DataPoint } from './data-points/entities/data-point.entity';

@Module({
  imports: [
    DataPointsModule,
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: parseInt(<string>process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DATABASE,
      autoLoadEntities: true,
      synchronize: false,
     // logging:true,
    entities:[DataPoint],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {


}
