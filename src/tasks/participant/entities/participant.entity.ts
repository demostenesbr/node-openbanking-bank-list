import { Module } from '@nestjs/common';
import { APIDiscoveryEndpoint } from "../../apidiscoveryendpoint/entities/apidiscoveryendpoint.entity";
import { APIResource } from "../../apiresource/entities/apiresource.entity";
import { AuthorisationServer } from "../../authorisationserver/entities/authorisationserver.entity";
import { Organisation } from "../../organisation/entities/organisation.entity";
import { OrgDomainClaim } from "../../orgdomainclaim/entities/orgdomainclaim.entity";
import { OrgDomainRoleClaim } from "../../orgdomainroleclaim/entities/orgdomainroleclaim.entity";

@Module({
  imports: [
    APIDiscoveryEndpoint,
    APIResource,
    AuthorisationServer,
    Organisation,
    OrgDomainClaim,
    OrgDomainRoleClaim,
  ]
})

export class Participants {}