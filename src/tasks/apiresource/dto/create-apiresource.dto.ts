import { IsString } from 'class-validator';

export class CreateApiResourceDto {
  @IsString()
  readonly ApiResourceId: string;

  @IsString()
  readonly ApiVersion: string;

  @IsString()
  readonly FamilyComplete: string;

  @IsString()
  readonly ApiCertificationUri: string;

  @IsString()
  readonly CertificationStatus: string;

  @IsString()
  readonly CertificationStartDate: string;

  @IsString()
  readonly CertificationExpirationDate: string;

  @IsString()
  readonly ApiFamilyType: string;

  @IsString()
  readonly ApiDiscoveryEndpoints: string;

  @IsString()
  readonly AuthorisationServer: string;
}
