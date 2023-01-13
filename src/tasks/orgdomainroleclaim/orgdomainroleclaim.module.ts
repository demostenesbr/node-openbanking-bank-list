import { Module } from '@nestjs/common';
import { OrgDomainRoleClaimService } from './orgdomainroleclaim.service';
import { OrgDomainRoleClaimController } from './orgdomainroleclaim.controller';

@Module({
  providers: [OrgDomainRoleClaimService],
  controllers: [OrgDomainRoleClaimController]
})
export class OrgDomainRoleClaimModule {}
