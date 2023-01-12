import { Test, TestingModule } from '@nestjs/testing';
import { ApidiscoveryendpointController } from './apidiscoveryendpoint.controller';

describe('ApidiscoveryendpointController', () => {
  let controller: ApidiscoveryendpointController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ApidiscoveryendpointController],
    }).compile();

    controller = module.get<ApidiscoveryendpointController>(ApidiscoveryendpointController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
