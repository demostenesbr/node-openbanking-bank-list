import { Test, TestingModule } from '@nestjs/testing';
import { OrgDomainRoleClaimService } from './orgdomainroleclaim.service';

describe('OrgDomainRoleClaimService', () => {
  let service: OrgDomainRoleClaimService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OrgDomainRoleClaimService],
    }).compile();

    service = module.get<OrgDomainRoleClaimService>(OrgDomainRoleClaimService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
