import { Module } from '@nestjs/common';
import { OrgDomainClaimService } from './orgdomainclaim.service';
import { OrgDomainClaimController } from './orgdomainclaim.controller';

@Module({
  providers: [OrgDomainClaimService],
  controllers: [OrgDomainClaimController]
})
export class OrgDomainClaimModule {}
