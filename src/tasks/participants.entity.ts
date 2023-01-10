import { Module } from '@nestjs/common';
import { ApiDiscoveryEndpoint } from "./apidiscoveryendpoints/entities/apidiscoveryendpoint.entity";
import { ApiResource } from "./apiresources/entities/apiresource.entity";
import { AuthorisationServer } from "./authorisationservers/entities/authorisationserver.entity";
import { Organisation } from "./organisations/entities/organisation.entity";
import { OrgDomainRoleClaim } from "./orgdomainroleclaims/entities/orgdomainroleclaim.entity";

@Module({
  imports: [
    ApiDiscoveryEndpoint,
    ApiResource,
    AuthorisationServer,
    Organisation,
    OrgDomainRoleClaim,
  ]
})

export class Participants {}