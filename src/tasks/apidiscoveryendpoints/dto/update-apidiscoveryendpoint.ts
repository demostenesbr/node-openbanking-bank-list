import { PartialType } from "@nestjs/mapped-types";
import { CreateApiDiscoveryEndPointDto } from './create-apidiscoveryendpoit.dto';

export class UpdateApiDiscoveryEndPointDto extends PartialType(CreateApiDiscoveryEndPointDto) {}