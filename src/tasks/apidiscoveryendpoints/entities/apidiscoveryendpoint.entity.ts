import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('apidiscoveryendpoints')
export class ApiDiscoveryEndpoint {
  @PrimaryGeneratedColumn()
  ApiDiscoveryId: string;

  @Column()
  ApiEndpoint: string;

  @Column()
  APIResource: string;
}