import { IsString } from 'class-validator';

export class CreateOrganisationDto {
  @IsString()
  readonly Id: string;

  @IsString()
  readonly Status: string;

  @IsString()
  readonly OrganisationName: string;

  @IsString()
  readonly CreatedOn: string;

  @IsString()
  readonly LegalEntityName: string;
  
  @IsString()
  readonly CountryOfRegistration: string;
  
  @IsString()
  readonly CompanyRegister: string;
  
  @IsString()
  readonly Tag: string;
  
  @IsString()
  readonly Size: string;
  
  @IsString()
  readonly RegistrationNumber: string;
  
  @IsString()
  readonly RegistrationId: string;

  @IsString()
  readonly RegisteredName: string;
  
  @IsString()
  readonly AddressLine1: string;
  
  @IsString()
  readonly AddressLine2: string;
  
  @IsString()
  readonly City: string;
  
  @IsString()
  readonly Postcode: string;
  
  @IsString()
  readonly Country: string;
  
  @IsString()
  readonly Order: string;
  
  @IsString()
  readonly ParentOrganisationReference: string;
}
