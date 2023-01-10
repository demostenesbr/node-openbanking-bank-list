import { Test, TestingModule } from '@nestjs/testing';
import { ApiresourcesController } from './apiresources.controller';

describe('ApiresourcesController', () => {
  let controller: ApiresourcesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ApiresourcesController],
    }).compile();

    controller = module.get<ApiresourcesController>(ApiresourcesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
