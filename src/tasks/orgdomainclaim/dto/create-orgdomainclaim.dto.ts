import { IsString } from 'class-validator';

export class CreateOrgDomainClaimDto {
  @IsString()
  readonly AuthorisationDomainName: string;

  @IsString()
  readonly AuthorityName: string;

  @IsString()
  readonly RegistrationId: string;
}
