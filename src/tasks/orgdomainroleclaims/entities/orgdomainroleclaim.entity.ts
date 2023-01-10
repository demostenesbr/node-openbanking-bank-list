import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class OrgDomainRoleClaim {
  @PrimaryGeneratedColumn()
  @Column()
  readonly AuthorisationDomainName: string;

  @Column()
  readonly AuthorityName: string;

  @Column()
  readonly RegistrationId: string;

}