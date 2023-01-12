import { Test, TestingModule } from '@nestjs/testing';
import { OrganisationController } from './organisation.controller';

describe('OrganisationController', () => {
  let controller: OrganisationController;

  beforeEach(async () => {
    const Organisation: TestingModule = await Test.createTestingModule({
      controllers: [OrganisationController],
    }).compile();

    controller = Organisation.get<OrganisationController>(OrganisationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
