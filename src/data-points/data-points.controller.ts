import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { readFileSync } from 'fs';
import { diskStorage } from 'multer';
//import { extname, parse } from 'path';
import { DataPointsService } from './data-points.service';
import { CreateDataPointDto } from './dto/create-data-point.dto';
import { UpdateDataPointDto } from './dto/update-data-point.dto';
import {parse} from 'papaparse';
import { extname } from 'path';
@Controller('datapoints')
export class DataPointsController {
  constructor(private readonly dataPointsService: DataPointsService) {}

  // @Post()
  // create(@Body() createDataPointDto: CreateDataPointDto) {
  //   return this.dataPointsService.create(createDataPointDto);
  // }

  // @Post('upload')
  // @UseInterceptors(
  //   FileInterceptor('file', {
  //     storage: diskStorage({
  //       destination: './info',
  //       filename: (req, file, callback) => {
  //         const fileExtName = extname(file.originalname);
  //         callback(null, `data${fileExtName}`);
  //       },
  //     }),
  //     fileFilter: (req, file, callback) => {
  //       if (!file.originalname.match(/\.(csv)$/)) {
  //         return callback(new Error('Only CSV files are allowed!'), false);
  //       }
  //       callback(null, true);
  //     },
  //   }),
  // )
  // uploadFile(@UploadedFile() file: Express.Multer.File) {
  //   const response = {
  //     message: 'Congrats...! File uploaded successfully!',
  //     data: {
  //       originalname: file.originalname,
  //       filename: file.filename,
  //     },
  //   };
  //   return response;
  // }
  @Post()
  @UseInterceptors(
    FileInterceptor('file',{
      storage:diskStorage({
        destination:'./info',
        filename:(req,file,callback)=>{
          const fileExtName=extname(file.originalname);
          callback(null,`${file.originalname}`);
        },
      }),

      
      fileFilter:(req,file,callback)=>{
        if(!file.originalname.match(/\.(csv)$/)){
          return callback(new Error('please check file format'),false);
        }
        callback(null,true)
      }
    }),
  )
  async uploadFile(@UploadedFile()file:Express.Multer.File){
    const csvFile=readFileSync(`info/${file.originalname}`);
    const csvData= csvFile.toString();
    const parsedCsv=await parse(csvData,{
      header:true,
      skipEmptyLines:true,
      transformHeader:(header:string)=>header.toLocaleLowerCase().replace('#','').trim(),
      complete:(result:{data:any;})=>result.data,
 });
 console.log(parsedCsv.data[0]);
//  var Point = {
//    type: 'Point',
//    coordinates: [parsedCsv.data[0].lat, parsedCsv.data[0].long],
//  };
//  const loadData = {
//    id: parsedCsv.data[0].id,
//    lat: parsedCsv.data[0].lat,
//    long: parsedCsv.data[0].long,
//    city_name: parsedCsv.data[0].city_name,
//    location:Point
//  };
//  console.log(loadData);
//  this.dataPointsService.create(loadData);

// foe each loop


parsedCsv.data.forEach(element => {
  var Point = {
    type: 'Point',
    coordinates: [element.lat, element.long],
  };
  const loadData = {
    id:element.id,
    lat:element.lat,
    long:element.long,
    city_name:element.city_name,
    location:Point
  };
  console.log(loadData);
  this.dataPointsService.create(loadData);
  
});




 const response = {
   message: 'File uploaded successfully!',
   data: {
     originalname: file.originalname,
     filename: file.filename,
   },
 };
 return response;

  }

  @Get()
  findAll() {
    return this.dataPointsService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.dataPointsService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateDataPointDto: UpdateDataPointDto) {
  //   return this.dataPointsService.update(+id, updateDataPointDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.dataPointsService.remove(+id);
  // }
}



