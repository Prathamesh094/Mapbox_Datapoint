import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DataPointsService } from './data-points.service';
import { CreateDataPointDto } from './dto/create-data-point.dto';
import { UpdateDataPointDto } from './dto/update-data-point.dto';

@Controller('datapoints')
export class DataPointsController {
  constructor(private readonly dataPointsService: DataPointsService) {}

  @Post()
  create(@Body() createDataPointDto: CreateDataPointDto) {
    return this.dataPointsService.create(createDataPointDto);
  }

  @Get()
  findAll() {
    return this.dataPointsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dataPointsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDataPointDto: UpdateDataPointDto) {
    return this.dataPointsService.update(+id, updateDataPointDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dataPointsService.remove(+id);
  }
}
