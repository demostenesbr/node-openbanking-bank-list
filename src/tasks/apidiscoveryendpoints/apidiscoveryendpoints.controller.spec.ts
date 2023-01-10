import { Test, TestingModule } from '@nestjs/testing';
import { ApidiscoveryendpointsController } from './apidiscoveryendpoints.controller';

describe('ApidiscoveryendpointsController', () => {
  let controller: ApidiscoveryendpointsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ApidiscoveryendpointsController],
    }).compile();

    controller = module.get<ApidiscoveryendpointsController>(ApidiscoveryendpointsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
