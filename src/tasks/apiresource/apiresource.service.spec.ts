import { Test, TestingModule } from '@nestjs/testing';
import { ApiresourceService } from './apiresource.service';

describe('ApiresourceService', () => {
  let service: ApiresourceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ApiresourceService],
    }).compile();

    service = module.get<ApiresourceService>(ApiresourceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
