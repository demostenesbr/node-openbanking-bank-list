import { PartialType } from "@nestjs/mapped-types";
import { CreateAPIResourceDto } from './create-apiresource.dto';

export class UpdateAPIResourceDto extends PartialType(CreateAPIResourceDto) {}