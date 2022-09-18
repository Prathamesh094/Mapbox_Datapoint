import { Injectable } from '@nestjs/common';
import { CreateDataPointDto } from './dto/create-data-point.dto';
import { UpdateDataPointDto } from './dto/update-data-point.dto';

@Injectable()
export class DataPointsService {
  create(createDataPointDto: CreateDataPointDto) {
    return 'This action adds a new dataPoint';
  }

  findAll() {
    return `This action returns all dataPoints`;
  }

  findOne(id: number) {
    return `This action returns a #${id} dataPoint`;
  }

  update(id: number, updateDataPointDto: UpdateDataPointDto) {
    return `This action updates a #${id} dataPoint`;
  }

  remove(id: number) {
    return `This action removes a #${id} dataPoint`;
  }
}
