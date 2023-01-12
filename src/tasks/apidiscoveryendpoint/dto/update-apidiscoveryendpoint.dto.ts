import { PartialType } from "@nestjs/mapped-types";
import { CreateApiDiscoveryEndPointDto } from './create-apidiscoveryendpont.dto';

export class UpdateApiDiscoveryEndPointDto extends PartialType(CreateApiDiscoveryEndPointDto) {}