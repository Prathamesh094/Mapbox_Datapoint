import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';
import { CreateDataPointDto } from './dto/create-data-point.dto';
import { UpdateDataPointDto } from './dto/update-data-point.dto';
import { DataPoint } from './entities/data-point.entity';

@Injectable()
export class DataPointsService {
  // create(createDataPointDto: CreateDataPointDto) {
  //   return 'This action adds a new dataPoint';
  // }

  constructor(
    @InjectRepository(DataPoint)
    private readonly MapRepository: Repository<DataPoint>,
  ) {}

  findAll(): Promise<DataPoint[]> {
    return this.MapRepository.find();
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} dataPoint`;
  // }

  // update(id: number, updateDataPointDto: UpdateDataPointDto) {
  //   return `This action updates a #${id} dataPoint`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} dataPoint`;
  // }
}
