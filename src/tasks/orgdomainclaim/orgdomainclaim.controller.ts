import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { OrgDomainClaimService } from './OrgDomainClaim.service';
import { OrgDomainClaim as OrgDomainClaimModel } from '@prisma/client';

@Controller()
export class OrgDomainClaimController {
  constructor(private readonly OrgDomainClaimservice: OrgDomainClaimService) {}

  @Get('orgdomainclaim')
  async getPublishedOrgDomainClaim(): Promise<OrgDomainClaimModel[]> {
    return this.OrgDomainClaimservice.publishOrgDomainClaim({
      where: {},
    });
  }

  @Get('orgdomainclaim/:id')
  async getOrganistionById(
    @Param('id') id: string,
  ): Promise<OrgDomainClaimModel> {
    return this.OrgDomainClaimservice.OrgDomainClaimById({  RegistrationId: String(id) });
  }

  @Get('filtered-orgdomainclaim/:searchString')
  async getFilteredOrgDomainClaim(
    @Param('searchString') searchString: string,
  ): Promise<OrgDomainClaimModel[]> {
    return this.OrgDomainClaimservice.publishOrgDomainClaim({
      where: {
        OR: [
          {
            AuthorityName: { contains: searchString },
          },
        ],
      },
    });
  }

  @Post('')
  async createDraft(
    @Body()
    OrgDomainClaimData: {
      AuthorisationDomainName: string;
      AuthorityName: string;
      RegistrationId: string;
    },
  ): Promise<OrgDomainClaimModel> {
    const {
      AuthorisationDomainName,
      AuthorityName,
    } = OrgDomainClaimData;
    return this.OrgDomainClaimservice.createOrgDomainClaim({
      AuthorisationDomainName,
      AuthorityName,
      Status: 'ACTIVE'
    });
  }

  @Put('OrgDomainClaim/:id')
  async publishOrgDomainClaim(
    @Param('id') id: string,
  ): Promise<OrgDomainClaimModel> {
    return this.OrgDomainClaimservice.updateOrgDomainClaim({
      where: { RegistrationId: String(id) },
      data: { AuthorityName: String(id) },
    });
  }

  @Delete('OrgDomainClaim/id')
  async deleteOrgDomainClaim(
    @Param('id') id: string,
  ): Promise<OrgDomainClaimModel> {
    return this.OrgDomainClaimservice.deleteOrgDomainClaim({  RegistrationId: String(id) });
  }
}
