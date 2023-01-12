import { Module } from '@nestjs/common';
import { OrgdomainclaimService } from './orgdomainclaim.service';
import { OrgdomainclaimController } from './orgdomainclaim.controller';

@Module({
  providers: [OrgdomainclaimService],
  controllers: [OrgdomainclaimController]
})
export class OrgdomainclaimModule {}
