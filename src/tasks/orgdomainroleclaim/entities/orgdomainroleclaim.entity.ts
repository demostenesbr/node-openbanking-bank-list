import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('orgdomainroleclaim')
export class OrgDomainRoleClaim {
  @PrimaryGeneratedColumn()
  AuthorisationDomainName: string;

  @Column()
  AuthorityName: string;

  @Column()
  RegistrationId: string; 
}
