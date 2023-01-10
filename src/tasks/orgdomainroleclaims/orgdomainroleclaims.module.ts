import { Module } from '@nestjs/common';
import { OrgdomainroleclaimsController } from './orgdomainroleclaims.controller';
import { OrgdomainroleclaimsService } from './orgdomainroleclaims.service';

@Module({
  controllers: [OrgdomainroleclaimsController],
  providers: [OrgdomainroleclaimsService]
})
export class OrgdomainroleclaimsModule {}
