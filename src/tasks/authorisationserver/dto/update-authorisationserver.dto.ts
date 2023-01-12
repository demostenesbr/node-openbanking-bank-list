import { PartialType } from "@nestjs/mapped-types";
import { CreateAuthorisationServerDto } from './create-authorisationserver.dto';

export class UpdateAuthorisationServerDto extends PartialType(CreateAuthorisationServerDto) {}