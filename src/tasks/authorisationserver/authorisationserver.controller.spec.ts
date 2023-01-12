import { Test, TestingModule } from '@nestjs/testing';
import { AuthorisationServerController } from './authorisationserver.controller';

describe('AuthorisationServerController', () => {
  let controller: AuthorisationServerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthorisationServerController],
    }).compile();

    controller = module.get<AuthorisationServerController>(AuthorisationServerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
