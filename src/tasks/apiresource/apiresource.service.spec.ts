import { Test, TestingModule } from '@nestjs/testing';
import { APIResourceService } from './apiresource.service';

describe('APIResourceService', () => {
  let service: APIResourceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [APIResourceService],
    }).compile();

    service = module.get<APIResourceService>(APIResourceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
