import { Test, TestingModule } from '@nestjs/testing';
import { OrganisationsController } from './organisations.controller';

describe('OrganisationsController', () => {
  let controller: OrganisationsController;

  beforeEach(async () => {
    const Organisations: TestingModule = await Test.createTestingModule({
      controllers: [OrganisationsController],
    }).compile();

    controller = Organisations.get<OrganisationsController>(OrganisationsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
