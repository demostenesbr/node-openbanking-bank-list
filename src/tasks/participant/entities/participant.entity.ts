import { Module } from '@nestjs/common';
import { ApiDiscoveryEndPoint } from "../../apidiscoveryendpoint/entities/apidiscoveryendpoint.entity";
import { ApiResource } from "../../apiresource/entities/apiresource.entity";
import { AuthorisationServer } from "../../authorisationserver/entities/authorisationserver.entity";
import { Organisation } from "../../organisation/entities/organisation.entity";
import { OrgDomainClaim } from "../../orgdomainclaim/entities/orgdomainclaim.entity";
import { OrgDomainRoleClaim } from "../../orgdomainroleclaim/entities/orgdomainroleclaim.entity";

@Module({
  imports: [
    ApiDiscoveryEndPoint,
    ApiResource,
    AuthorisationServer,
    Organisation,
    OrgDomainClaim,
    OrgDomainRoleClaim,
  ]
})

export class Participants {}