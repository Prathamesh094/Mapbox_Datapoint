import { PartialType } from '@nestjs/mapped-types';
import { CreateDataPointDto } from './create-data-point.dto';

export class UpdateDataPointDto extends PartialType(CreateDataPointDto) {}
