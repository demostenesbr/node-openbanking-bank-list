import { IsString } from 'class-validator';

export class CreateAPIDiscoveryEndpointDto {
  @IsString()
  readonly ApiDiscoveryId: string;
  
  @IsString()
  readonly ApiEndpoint: string;
  
  @IsString()
  readonly APIResource: string;
}
