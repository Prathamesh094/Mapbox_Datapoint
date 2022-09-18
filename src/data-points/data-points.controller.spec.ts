import { Test, TestingModule } from '@nestjs/testing';
import { DataPointsController } from './data-points.controller';
import { DataPointsService } from './data-points.service';

describe('DataPointsController', () => {
  let controller: DataPointsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DataPointsController],
      providers: [DataPointsService],
    }).compile();

    controller = module.get<DataPointsController>(DataPointsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
