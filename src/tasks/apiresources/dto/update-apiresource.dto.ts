import { PartialType } from "@nestjs/mapped-types";
import { CreateApiResourceDto } from './create-apiresource.dto';

export class UpdateApiResourceDto extends PartialType(CreateApiResourceDto) {}