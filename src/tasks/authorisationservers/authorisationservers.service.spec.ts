import { Test, TestingModule } from '@nestjs/testing';
import { AuthorisationserversService } from './authorisationservers.service';

describe('AuthorisationserversService', () => {
  let service: AuthorisationserversService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthorisationserversService],
    }).compile();

    service = module.get<AuthorisationserversService>(AuthorisationserversService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
