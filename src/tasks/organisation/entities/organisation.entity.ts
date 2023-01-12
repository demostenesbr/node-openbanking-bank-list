import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('organisations')
export class Organisation {
  @PrimaryGeneratedColumn()
  Id: string;

  @Column()
  Status: string;

  @Column()
  OrganisationName: string;

  @Column()
  CreatedOn: string;

  @Column()
  LegalEntityName: string;
  
  @Column()
  CountryOfRegistration: string;
  
  @Column()
  CompanyRegister: string;
  
  @Column()
  Tag: string;
  
  @Column()
  Size: string;
  
  @Column()
  RegistrationNumber: string;
  
  @Column()
  RegistrationId: string;

  @Column()
  RegisteredName: string;
  
  @Column()
  AddressLine1: string;
  
  @Column()
  AddressLine2: string;
  
  @Column()
  City: string;
  
  @Column()
  Postcode: string;
  
  @Column()
  Country: string;
  
  @Column()
  Order: string;
  
  @Column()
  ParentOrganisationReference: string;
}
