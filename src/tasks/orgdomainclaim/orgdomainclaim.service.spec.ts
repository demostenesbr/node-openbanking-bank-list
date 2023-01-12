import { Test, TestingModule } from '@nestjs/testing';
import { OrgdomainclaimService } from './orgdomainclaim.service';

describe('OrgdomainclaimService', () => {
  let service: OrgdomainclaimService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OrgdomainclaimService],
    }).compile();

    service = module.get<OrgdomainclaimService>(OrgdomainclaimService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
