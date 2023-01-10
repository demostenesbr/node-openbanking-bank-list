import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class AuthorisationServer {
  @PrimaryGeneratedColumn()
  readonly AuthorisationServerId: string;
  
  @Column()
  readonly AutoRegistrationSupported: string;
  
  @Column()
  readonly AutoRegistrationNotificationWebhook: string;
  
  @Column()
  readonly SupportsCiba: string;
  
  @Column()
  readonly SupportsDCR: string;
  
  @Column()
  readonly CustomerFriendlyDescription: string;
  
  @Column()
  readonly CustomerFriendlyLogoUri: string;
  
  @Column()
  readonly CustomerFriendlyName: string;
  
  @Column()
  readonly DeveloperPortalUri: string;
  
  @Column()
  readonly TermsOfServiceUri: string;
  
  @Column()
  readonly NotificationWebhookAddedDate: string;
  
  @Column()
  readonly OpenIDDiscoveryDocument: string;
  
  @Column()
  readonly Issuer: string;
  
  @Column()
  readonly PayloadSigningCertLocationUri: string;
  
  @Column()
  readonly ParentAuthorisationServerId: string;
  
  @Column()
  readonly DeprecatedDate: string;
  
  @Column()
  readonly RetirementDate: string;
  
  @Column()
  readonly SupersededByAuthorisationServerId: string;
}