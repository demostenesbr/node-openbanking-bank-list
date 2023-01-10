import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApidiscoveryendpointsModule } from './tasks/apidiscoveryendpoints/apidiscoveryendpoints.module';
import { OrganisationsService } from './tasks/organisations/organisations.service';
import { OrganisationsModule } from './tasks/organisations/organisations.module';
import { ApiresourcesModule } from './tasks/apiresources/apiresources.module';
import { AuthorisationserversService } from './tasks/authorisationservers/authorisationservers.service';
import { AuthorisationserversController } from './tasks/authorisationservers/authorisationservers.controller';
import { AuthorisationserversModule } from './tasks/authorisationservers/authorisationservers.module';
import { OrgdomainroleclaimsModule } from './tasks/orgdomainroleclaims/orgdomainroleclaims.module';

@Module({
  imports: [
    ApidiscoveryendpointsModule,
    OrganisationsModule,
    ApiresourcesModule,
    AuthorisationserversModule,
    OrgdomainroleclaimsModule,
  ],
  controllers: [AppController, AuthorisationserversController],
  providers: [AppService, OrganisationsService, AuthorisationserversService],
})
export class AppModule {}
