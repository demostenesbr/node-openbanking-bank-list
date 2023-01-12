import { Test, TestingModule } from '@nestjs/testing';
import { OrgdomainroleclaimService } from './orgdomainroleclaim.service';

describe('OrgdomainroleclaimService', () => {
  let service: OrgdomainroleclaimService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OrgdomainroleclaimService],
    }).compile();

    service = module.get<OrgdomainroleclaimService>(OrgdomainroleclaimService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
