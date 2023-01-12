import { Test, TestingModule } from '@nestjs/testing';
import { OrgdomainroleclaimController } from './orgdomainroleclaim.controller';

describe('OrgdomainroleclaimController', () => {
  let controller: OrgdomainroleclaimController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrgdomainroleclaimController],
    }).compile();

    controller = module.get<OrgdomainroleclaimController>(OrgdomainroleclaimController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
