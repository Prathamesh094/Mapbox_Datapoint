import { Module } from '@nestjs/common';
import { DataPointsService } from './data-points.service';
import { DataPointsController } from './data-points.controller';
import { DataPoint } from './entities/data-point.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([DataPoint])],
  controllers: [DataPointsController],
  providers: [DataPointsService]
})
export class DataPointsModule {}
