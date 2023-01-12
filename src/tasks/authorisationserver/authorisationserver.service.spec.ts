import { Test, TestingModule } from '@nestjs/testing';
import { AuthorisationServerService } from './authorisationserver.service';

describe('AuthorisationServerService', () => {
  let service: AuthorisationServerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthorisationServerService],
    }).compile();

    service = module.get<AuthorisationServerService>(AuthorisationServerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
