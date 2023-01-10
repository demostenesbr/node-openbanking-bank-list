import { IsString } from 'class-validator';

export class CreateOrgDomainRoleClaimDto {
  @IsString()
  readonly AuthorisationDomainName: string;

  @IsString()
  readonly AuthorityName: string;

  @IsString()
  readonly RegistrationId: string;
}
