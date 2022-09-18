import { Test, TestingModule } from '@nestjs/testing';
import { DataPointsService } from './data-points.service';

describe('DataPointsService', () => {
  let service: DataPointsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DataPointsService],
    }).compile();

    service = module.get<DataPointsService>(DataPointsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
