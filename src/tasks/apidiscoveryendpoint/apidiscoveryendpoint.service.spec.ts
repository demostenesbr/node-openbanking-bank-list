import { Test, TestingModule } from '@nestjs/testing';
import { APIDiscoveryEndpointService } from './APIDiscoveryendpoint.service';

describe('APIDiscoveryEndpointservice', () => {
  let service: APIDiscoveryEndpointService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [APIDiscoveryEndpointService],
    }).compile();

    service = module.get<APIDiscoveryEndpointService>(APIDiscoveryEndpointService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
