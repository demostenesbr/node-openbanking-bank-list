import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { OrganisationService } from './organisation.service';
import { Organisation as OrganisationModel } from '@prisma/client';

@Controller()
export class OrganisationController {
  constructor(private readonly organisationservice: OrganisationService) {}

  @Get('organisation')
  async getPublishedOrganisation(): Promise<OrganisationModel[]> {
    return this.organisationservice.organisation({
      where: {},
    });
  }

  @Get('organisation/:id')
  async getOrganistionById(
    @Param('id') id: string,
  ): Promise<OrganisationModel> {
    return this.organisationservice.organisationById({ OrganisationId: String(id) });
  }

  @Get('filtered-organsations/:searchString')
  async getFilteredOrganisation(
    @Param('searchString') searchString: string,
  ): Promise<OrganisationModel[]> {
    return this.organisationservice.organisation({
      where: {
        OR: [
          {
            OrganisationName: { contains: searchString },
          },
        ],
      },
    });
  }

  @Post('')
  async createDraft(
    @Body()
    organisationData: {
      OrganisationId: string;
      OrganisationName: string;
      CreatedOn: string;
      LegalEntityName: string;
      CountryOfRegistration: string;
      CompanyRegister: string;
      Tag: string;
      Size: string;
      RegistrationNumber: string;
      RegistrationId: string;
      RegisteredName: string;
      AddressLine1: string;
      AddressLine2: string;
      City: string;
      Postcode: string;
      Country: string;
      Order: string;
      ParentOrganisationReference: string;
    },
  ): Promise<OrganisationModel> {
    const {
      OrganisationName,
      CreatedOn,
      LegalEntityName,
      CountryOfRegistration,
      CompanyRegister,
      Tag,
      Size,
      RegistrationNumber,
      RegistrationId,
      RegisteredName,
      AddressLine1,
      AddressLine2,
      City,
      Postcode,
      Country,
      Order,
      ParentOrganisationReference,
    } = organisationData;
    return this.organisationservice.createOrganisation({
      OrganisationName,
      CreatedOn,
      LegalEntityName,
      CountryOfRegistration,
      CompanyRegister,
      Tag,
      Size,
      RegistrationNumber,
      RegistrationId,
      RegisteredName,
      AddressLine1,
      AddressLine2,
      City,
      Postcode,
      Country,
      Order,
      ParentOrganisationReference,
    });
  }

  @Put('organisation/:id')
  async publishOrganisation(
    @Param('id') id: string,
  ): Promise<OrganisationModel> {
    return this.organisationservice.updateOrganisation({
      where: { OrganisationId: String(id) },
      data: { OrganisationName: '' },
    });
  }

  @Delete('organisation/id')
  async deleteOrganisation(
    @Param('id') id: string,
  ): Promise<OrganisationModel> {
    return this.organisationservice.deleteOrganisation({ OrganisationId: String(id) });
  }
}
