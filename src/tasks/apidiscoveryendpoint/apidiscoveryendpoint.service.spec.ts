import { Test, TestingModule } from '@nestjs/testing';
import { ApidiscoveryendpointService } from './apidiscoveryendpoint.service';

describe('ApidiscoveryendpointService', () => {
  let service: ApidiscoveryendpointService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ApidiscoveryendpointService],
    }).compile();

    service = module.get<ApidiscoveryendpointService>(ApidiscoveryendpointService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
