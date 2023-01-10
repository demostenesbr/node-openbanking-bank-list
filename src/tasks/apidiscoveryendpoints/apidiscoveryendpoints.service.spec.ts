import { Test, TestingModule } from '@nestjs/testing';
import { ApidiscoveryendpointsService } from './apidiscoveryendpoints.service';

describe('ApidiscoveryendpointsService', () => {
  let service: ApidiscoveryendpointsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ApidiscoveryendpointsService],
    }).compile();

    service = module.get<ApidiscoveryendpointsService>(ApidiscoveryendpointsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
