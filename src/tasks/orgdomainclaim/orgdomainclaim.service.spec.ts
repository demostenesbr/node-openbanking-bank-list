import { Test, TestingModule } from '@nestjs/testing';
import { OrgDomainClaimService } from './orgdomainclaim.service';

describe('OrgDomainClaimService', () => {
  let service: OrgDomainClaimService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OrgDomainClaimService],
    }).compile();

    service = module.get<OrgDomainClaimService>(OrgDomainClaimService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
