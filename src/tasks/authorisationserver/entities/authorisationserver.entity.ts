import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class AuthorisationServer {
  @PrimaryGeneratedColumn()
  AuthorisationServerId: string;
  
  @Column()
  AutoRegistrationSupported: string;
  
  @Column()
  AutoRegistrationNotificationWebhook: string;
  
  @Column()
  SupportsCiba: string;
  
  @Column()
  SupportsDCR: string;
  
  @Column()
  CustomerFriendlyDescription: string;
  
  @Column()
  CustomerFriendlyLogoUri: string;
  
  @Column()
  CustomerFriendlyName: string;
  
  @Column()
  DeveloperPortalUri: string;
  
  @Column()
  TermsOfServiceUri: string;
  
  @Column()
  NotificationWebhookAddedDate: string;
  
  @Column()
  OpenIDDiscoveryDocument: string;
  
  @Column()
  Issuer: string;
  
  @Column()
  PayloadSigningCertLocationUri: string;
  
  @Column()
  ParentAuthorisationServerId: string;
  
  @Column()
  DeprecatedDate: string;
  
  @Column()
  RetirementDate: string;
  
  @Column()
  SupersededByAuthorisationServerId: string;
}