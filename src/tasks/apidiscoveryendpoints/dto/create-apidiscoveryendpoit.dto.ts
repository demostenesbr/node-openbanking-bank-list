import { IsString } from 'class-validator';

export class CreateApiDiscoveryEndPointDto {
  @IsString()
  readonly ApiDiscoveryId: string;

  @IsString()
  readonly ApiEndpoint: string;

  @IsString()
  readonly APIResource: string;
}
