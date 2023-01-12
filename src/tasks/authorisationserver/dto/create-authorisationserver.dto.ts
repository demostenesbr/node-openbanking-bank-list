import { IsString } from 'class-validator';

export class CreateAuthorisationServerDto {
  @IsString()
  readonly AuthorisationServerId: string;
  
  @IsString()
  readonly AutoRegistrationSupported: string;
  
  @IsString()
  readonly AutoRegistrationNotificationWebhook: string;
  
  @IsString()
  readonly SupportsCiba: string;
  
  @IsString()
  readonly SupportsDCR: string;
  
  @IsString()
  readonly CustomerFriendlyDescription: string;
  
  @IsString()
  readonly CustomerFriendlyLogoUri: string;
  
  @IsString()
  readonly CustomerFriendlyName: string;
  
  @IsString()
  readonly DeveloperPortalUri: string;
  
  @IsString()
  readonly TermsOfServiceUri: string;
  
  @IsString()
  readonly NotificationWebhookAddedDate: string;
  
  @IsString()
  readonly OpenIDDiscoveryDocument: string;
  
  @IsString()
  readonly Issuer: string;
  
  @IsString()
  readonly PayloadSigningCertLocationUri: string;
  
  @IsString()
  readonly ParentAuthorisationServerId: string;
  
  @IsString()
  readonly DeprecatedDate: string;
  
  @IsString()
  readonly RetirementDate: string;
  
  @IsString()
  readonly SupersededByAuthorisationServerId: string;   
}