import { PartialType } from "@nestjs/mapped-types";
import { CreateOrgDomainClaimDto } from './create-orgdomainclaim.dto';

export class UpdateOrgDomainClaimDto extends PartialType(CreateOrgDomainClaimDto) {}