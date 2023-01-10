import { Test, TestingModule } from '@nestjs/testing';
import { ApiresourcesService } from './apiresources.service';

describe('ApiresourcesService', () => {
  let service: ApiresourcesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ApiresourcesService],
    }).compile();

    service = module.get<ApiresourcesService>(ApiresourcesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
