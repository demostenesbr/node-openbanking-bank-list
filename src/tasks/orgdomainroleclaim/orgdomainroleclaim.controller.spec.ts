import { Test, TestingModule } from '@nestjs/testing';
import { OrgDomainRoleClaimController } from './orgdomainroleclaim.controller';

describe('OrgDomainRoleClaimController', () => {
  let controller: OrgDomainRoleClaimController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrgDomainRoleClaimController],
    }).compile();

    controller = module.get<OrgDomainRoleClaimController>(OrgDomainRoleClaimController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
