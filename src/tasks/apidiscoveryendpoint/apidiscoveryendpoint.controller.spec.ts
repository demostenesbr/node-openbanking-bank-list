import { Test, TestingModule } from '@nestjs/testing';
import { APIDiscoveryEndpointController } from './apidiscoveryendpoint.controller';

describe('APIDiscoveryEndpointController', () => {
  let controller: APIDiscoveryEndpointController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [APIDiscoveryEndpointController],
    }).compile();

    controller = module.get<APIDiscoveryEndpointController>(APIDiscoveryEndpointController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
