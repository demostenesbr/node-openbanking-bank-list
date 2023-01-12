import { Test, TestingModule } from '@nestjs/testing';
import { OrgdomainclaimController } from './orgdomainclaim.controller';

describe('OrgdomainclaimController', () => {
  let controller: OrgdomainclaimController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrgdomainclaimController],
    }).compile();

    controller = module.get<OrgdomainclaimController>(OrgdomainclaimController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
