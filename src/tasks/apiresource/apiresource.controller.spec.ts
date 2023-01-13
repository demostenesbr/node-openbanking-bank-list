import { Test, TestingModule } from '@nestjs/testing';
import { APIResourceController } from './apiresource.controller';

describe('ApiresourceController', () => {
  let controller: APIResourceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [APIResourceController],
    }).compile();

    controller = module.get<APIResourceController>(APIResourceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
