import { Test, TestingModule } from '@nestjs/testing';
import { AuthorisationserversController } from './authorisationservers.controller';

describe('AuthorisationserversController', () => {
  let controller: AuthorisationserversController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthorisationserversController],
    }).compile();

    controller = module.get<AuthorisationserversController>(AuthorisationserversController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
