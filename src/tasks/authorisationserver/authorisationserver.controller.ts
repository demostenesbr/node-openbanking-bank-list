import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { AuthorisationServerService } from './authorisationserver.service';
import { AuthorisationServer as AuthorisationServerModel } from '@prisma/client';

@Controller()
export class AuthorisationServerController {
  constructor(
    private readonly AuthorisationServerservice: AuthorisationServerService,
  ) {}

  @Get('authorisationserver')
  async getPublishedAuthorisationServer(): Promise<AuthorisationServerModel[]> {
    return this.AuthorisationServerservice.publishAuthorisationServer({
      where: {},
    });
  }

  @Get('authorisationserver/:id')
  async getOrganistionById(
    @Param('id') id: string,
  ): Promise<AuthorisationServerModel> {
    return this.AuthorisationServerservice.AuthorisationServerById({
      AuthorisationServerId: String(id),
    });
  }

  @Get('filtered-organsations/:searchString')
  async getFilteredAuthorisationServer(
    @Param('searchString') searchString: string,
  ): Promise<AuthorisationServerModel[]> {
    return this.AuthorisationServerservice.publishAuthorisationServer({
      where: {
        OR: [
          {
            AutoRegistrationNotificationWebhook: { contains: searchString },
          },
        ],
      },
    });
  }

  @Post('')
  async createDraft(
    @Body()
    AuthorisationServerData: {
      AuthorisationServerId: string;
      AutoRegistrationSupported: boolean;
      AutoRegistrationNotificationWebhook: string;
      SupportsCiba: boolean;
      SupportsDCR: boolean;
      CustomerFriendlyDescription: string;
      CustomerFriendlyLogoUri: string;
      CustomerFriendlyName: string;
      DeveloperPortalUri: string;
      TermsOfServiceUri: string;
      NotificationWebhookAddedDate: string;
      OpenIDDiscoveryDocument: string;
      Issuer: string;
      PayloadSigningCertLocationUri: string;
      ParentAuthorisationServerId: string;
      DeprecatedDate: string;
      RetirementDate: string;
      SupersededByAuthorisationServerId: string;
    },
  ): Promise<AuthorisationServerModel> {
    const {
      AutoRegistrationSupported,
      AutoRegistrationNotificationWebhook,
      SupportsCiba,
      SupportsDCR,
      CustomerFriendlyDescription,
      CustomerFriendlyLogoUri,
      CustomerFriendlyName,
      DeveloperPortalUri,
      TermsOfServiceUri,
      NotificationWebhookAddedDate,
      OpenIDDiscoveryDocument,
      Issuer,
      PayloadSigningCertLocationUri,
      ParentAuthorisationServerId,
      DeprecatedDate,
      RetirementDate,
      SupersededByAuthorisationServerId,
    } = AuthorisationServerData;
    return this.AuthorisationServerservice.createAuthorisationServer({
      AutoRegistrationSupported,
      AutoRegistrationNotificationWebhook,
      SupportsCiba,
      SupportsDCR,
      CustomerFriendlyDescription,
      CustomerFriendlyLogoUri,
      CustomerFriendlyName,
      DeveloperPortalUri,
      TermsOfServiceUri,
      NotificationWebhookAddedDate,
      OpenIDDiscoveryDocument,
      Issuer,
      PayloadSigningCertLocationUri,
      ParentAuthorisationServerId,
      DeprecatedDate,
      RetirementDate,
      SupersededByAuthorisationServerId,
      SupportsRedirect: false
    });
  }

  @Put('authorisationserver/:id')
  async publishAuthorisationServer(
    @Param('id') id: string,
  ): Promise<AuthorisationServerModel> {
    return this.AuthorisationServerservice.updateAuthorisationServer({
      where: { AuthorisationServerId: String(id) },
      data: { AutoRegistrationNotificationWebhook: '' },
    });
  }

  @Delete('organisation/id')
  async deleteAuthorisationServer(
    @Param('id') id: string,
  ): Promise<AuthorisationServerModel> {
    return this.AuthorisationServerservice.deleteAuthorisationServer({
      AuthorisationServerId: String(id),
    });
  }
}
