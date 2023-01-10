import { Test, TestingModule } from '@nestjs/testing';
import { OrgdomainroleclaimsController } from './orgdomainroleclaims.controller';

describe('OrgdomainroleclaimsController', () => {
  let controller: OrgdomainroleclaimsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrgdomainroleclaimsController],
    }).compile();

    controller = module.get<OrgdomainroleclaimsController>(OrgdomainroleclaimsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
