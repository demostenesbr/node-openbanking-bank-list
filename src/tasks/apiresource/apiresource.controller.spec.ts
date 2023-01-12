import { Test, TestingModule } from '@nestjs/testing';
import { ApiresourceController } from './apiresource.controller';

describe('ApiresourceController', () => {
  let controller: ApiresourceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ApiresourceController],
    }).compile();

    controller = module.get<ApiresourceController>(ApiresourceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
