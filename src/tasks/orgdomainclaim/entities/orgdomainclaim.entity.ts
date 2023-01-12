import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('orgdomainclaim')
export class OrgDomainClaim {
  @PrimaryGeneratedColumn()
  AuthorisationDomainName: string;

  @Column()
  AuthorityName: string;

  @Column()
  RegistrationId: string; 
}
