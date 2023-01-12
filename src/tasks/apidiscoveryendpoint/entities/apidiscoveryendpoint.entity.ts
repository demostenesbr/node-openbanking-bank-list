import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('apidiscoveryendpoint')
export class ApiDiscoveryEndPoint {
  @PrimaryGeneratedColumn()
  RegistrationId: string;

  @Column()
  Status: string;

  @Column()
  AuthorisationDomain: string;

  @Column()
  Role: string;
}
