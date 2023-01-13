import { Test, TestingModule } from '@nestjs/testing';
import { OrgDomainClaimController } from './orgdomainclaim.controller';

describe('OrgDomainClaimController', () => {
  let controller: OrgDomainClaimController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrgDomainClaimController],
    }).compile();

    controller = module.get<OrgDomainClaimController>(OrgDomainClaimController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
