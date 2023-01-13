import { PartialType } from "@nestjs/mapped-types";
import { CreateAPIDiscoveryEndpointDto } from './create-apidiscoveryendpont.dto';

export class UpdateAPIDiscoveryEndpointDto extends PartialType(CreateAPIDiscoveryEndpointDto) {}