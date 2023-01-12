import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('apiresources')
export class ApiResource {
  @PrimaryGeneratedColumn()
  ApiResourceId: string;

  @Column()
  ApiVersion: string;

  @Column()
  FamilyComplete: string;

  @Column()
  ApiCertificationUri: string;

  @Column()
  CertificationStatus: string;

  @Column()
  CertificationStartDate: string;

  @Column()
  CertificationExpirationDate: string;

  @Column()
  ApiFamilyType: string;

  @Column()
  ApiDiscoveryEndpoints: string;

  @Column()
  AuthorisationServer: string;
}
