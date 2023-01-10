import { Test, TestingModule } from '@nestjs/testing';
import { OrgdomainroleclaimsService } from './orgdomainroleclaims.service';

describe('OrgdomainroleclaimsService', () => {
  let service: OrgdomainroleclaimsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OrgdomainroleclaimsService],
    }).compile();

    service = module.get<OrgdomainroleclaimsService>(OrgdomainroleclaimsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
