import { HttpService } from '@nestjs/axios';
import { AxiosError } from 'axios';
import {
  Injectable,
  Logger,
  OnModuleInit,
  INestApplication,
} from '@nestjs/common';
import { catchError, firstValueFrom } from 'rxjs';
import { Participants } from 'src/tasks/participants.entity';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class SharedService extends PrismaClient implements OnModuleInit {
  async OnModuleInit() {
    await this.$connect();
  }

  async enableShutdownHooks(app: INestApplication) {
    this.$on('beforeExit', async () => {
      await app.close();
    });
  }

  private readonly logger = new Logger(SharedService.name);
  constructor(private httpService: HttpService) {
    super();
  }
  onModuleInit() {
    throw new Error('Method not implemented.');
  }

  async findAll(): Promise<any[]> {
    const { data } = await firstValueFrom(
      this.httpService
        .get<Participants[]>(
          'https://data.directory.openbankingbrasil.org.br/participants',
        )
        .pipe(
          catchError((error: AxiosError) => {
            this.logger.error(error.response.data);
            throw 'Um erro ocorreu!';
          }),
        ),
    );
    return data;
  }

  async get(
    OrganisationName: string,
    CreatedOn: number,
    LegalEntityName: string,
    CompanyRegister: string,
    CountryOfRegistration: string,
    Tag: string,
    Size: string,
    RegistrationNumber: number,
    RegistrationId: number,
    RegisteredName: string,
    AddressLine1: string,
    AddressLine2: string,
    City: string,
    Postcode: number,
    Country: string,
    Order: string,
    ParentOrganisationReference: string,
    AuthorisationServerId: string,
    AutoRegistrationSupported: boolean,
    AutoRegistrationNotificationWebhook: string,
    SupportsCiba: boolean,
    SupportsDCR: boolean,
    CustomerFriendlyDescription: string,
    CustomerFriendlyLogoUri: string,
    CustomerFriendlyName: string,
    DeveloperPortalUri: string,
    TermsOfServiceUri: string,
    NotificationWebhookAddedDate: string,
    OpenIDDiscoveryDocument: string,
    Issuer: string,
    PayloadSigningCertLocationUri: string,
    ParentAuthorisationServerId: string,
    DeprecatedDate: string,
    RetirementDate: string,
    SupersededByAuthorisationServerId: string,
    ApiResourceId: string,
    ApiVersion: string,
    FamilyComplete: boolean,
    ApiCertificationUri: string,
    CertificationStatus: string,
    CertificationStartDate: string,
    CertificationExpirationDate: string,
    ApiFamilyType: string,
    ApiDiscoveryId: string,
    ApiEndpoint: string,
    AuthorisationDomainName: string,
    AuthorityName: string,
    AuthorisationDomain: string,
    Role: string,
  ): Promise<Participants> {
    const { data } = await firstValueFrom(
      this.httpService
        .get(
          `${OrganisationName}
          /${CreatedOn}
          /${LegalEntityName}
          /${CompanyRegister}
          /${CountryOfRegistration}
          /${Tag}
          /${Size}
          /${RegistrationNumber}
          /${RegistrationId}
          /${RegisteredName}
          /${AddressLine1}
          /${AddressLine2}
          /${City}
          /${Postcode}
          /${Country}
          /${Order}
          /${ParentOrganisationReference}
          /${AuthorisationServerId}
          /${AutoRegistrationSupported}
          /${AutoRegistrationNotificationWebhook}
          /${SupportsCiba}
          /${SupportsDCR}
          /${CustomerFriendlyDescription}
          /${CustomerFriendlyLogoUri}
          /${CustomerFriendlyName}
          /${DeveloperPortalUri}
          /${TermsOfServiceUri}
          /${NotificationWebhookAddedDate}
          /${OpenIDDiscoveryDocument}
          /${Issuer}
          /${PayloadSigningCertLocationUri}
          /${ParentAuthorisationServerId}
          /${DeprecatedDate}
          /${RetirementDate}
          /${SupersededByAuthorisationServerId}
          /${ApiResourceId}
          /${ApiVersion}
          /${FamilyComplete}
          /${ApiCertificationUri}
          /${CertificationStatus}
          /${CertificationStartDate}
          /${CertificationExpirationDate}
          /${ApiFamilyType}
          /${ApiDiscoveryId}
          /${ApiEndpoint}
          /${AuthorisationDomainName}
          /${AuthorityName}
          /${AuthorisationDomain}
          /${Role}`,
        )
        .pipe(
          catchError((error: AxiosError) => {
            console.log(error.response.data);
            throw 'Error request';
          }),
        ),
    );
    return data;
  }
}
