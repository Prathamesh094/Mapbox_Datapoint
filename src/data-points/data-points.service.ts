import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDataPointDto } from './dto/create-data-point.dto';
import { UpdateDataPointDto } from './dto/update-data-point.dto';
import { DataPoint } from './entities/data-point.entity';

@Injectable()
export class DataPointsService {
 

  constructor(
    @InjectRepository(DataPoint)
    private readonly MapRepository: Repository<DataPoint>,
  ) {}


  create(createDataPointDto: CreateDataPointDto):Promise<DataPoint>{
    return this.MapRepository.save(createDataPointDto)
  }

  findAll(): Promise<DataPoint[]> {
    return this.MapRepository.find();

    

//     @Injectable()
// export class dataServices {
//   constructor(
//     private readonly csvParser: CsvParser
//   ) {}

//   async parse() {
//     // Create stream from file (or get it from S3)
//     const stream = fs.createReadStream(__dirname + '/some.csv')
//     const entities: Entity[] = await csvParser.parse(stream, Entity)

//     return entities
//   }
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
