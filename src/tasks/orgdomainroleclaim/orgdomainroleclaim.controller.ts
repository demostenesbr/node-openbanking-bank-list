import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { OrgDomainRoleClaimService } from './OrgDomainRoleClaim.service';
import { OrgDomainRoleClaim as OrgDomainRoleClaimModel } from '@prisma/client';

@Controller()
export class OrgDomainRoleClaimController {
  constructor(
    private readonly OrgDomainRoleClaimservice: OrgDomainRoleClaimService,
  ) {}

  @Get('OrgDomainRoleClaim')
  async getPublishedOrgDomainRoleClaim(): Promise<OrgDomainRoleClaimModel[]> {
    return this.OrgDomainRoleClaimservice.publishOrgDomainRoleClaim({
      where: {},
    });
  }

  @Get('OrgDomainRoleClaim/:id')
  async getOrganistionById(
    @Param('id') id: string,
  ): Promise<OrgDomainRoleClaimModel> {
    return this.OrgDomainRoleClaimservice.OrgDomainRoleClaimById({
      RegistrationId: String(id),
    });
  }

  @Get('filtered-OrgDomainRoleClaim/:searchString')
  async getFilteredOrgDomainRoleClaim(
    @Param('searchString') searchString: string,
  ): Promise<OrgDomainRoleClaimModel[]> {
    return this.OrgDomainRoleClaimservice.publishOrgDomainRoleClaim({
      where: {
        OR: [
          {
            AuthorisationDomain: { contains: searchString },
          },
        ],
      },
    });
  }

  @Post('')
  async createDraft(
    @Body()
    OrgDomainRoleClaimData: {
      AuthorisationDomain: string;
      Role: string;
      Authorisations: string;
      RegistrationId: string;
    },
  ): Promise<OrgDomainRoleClaimModel> {
    const { AuthorisationDomain, Role, Authorisations } =
      OrgDomainRoleClaimData;
    return this.OrgDomainRoleClaimservice.createOrgDomainRoleClaim({
      AuthorisationDomain,
      Role,
      Authorisations,
      Status: 'ACTIVE',
    });
  }

  @Put('OrgDomainRoleClaim/:id')
  async publishOrgDomainRoleClaim(
    @Param('id') id: string,
  ): Promise<OrgDomainRoleClaimModel> {
    return this.OrgDomainRoleClaimservice.updateOrgDomainRoleClaim({
      where: { RegistrationId: String(id) },
      data: { AuthorisationDomain: String(id) },
    });
  }

  @Delete('OrgDomainRoleClaim/id')
  async deleteOrgDomainRoleClaim(
    @Param('id') id: string,
  ): Promise<OrgDomainRoleClaimModel> {
    return this.OrgDomainRoleClaimservice.deleteOrgDomainRoleClaim({
      RegistrationId: String(id),
    });
  }
}
