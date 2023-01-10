import { PartialType } from "@nestjs/mapped-types";
import { CreateOrgDomainRoleClaimDto } from './create-orgdomainroleclaim.dto'

export class UpdateOrgDomainRoleClaimDto extends PartialType(CreateOrgDomainRoleClaimDto) {}