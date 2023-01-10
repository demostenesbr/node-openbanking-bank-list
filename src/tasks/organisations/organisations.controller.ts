import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { OrganisationsService } from './organisations.service';
import { Organisations as OrganisationsModel } from '@prisma/client';

@Controller()
export class OrganisationsController {
  constructor(private readonly organisationService: OrganisationsService) {}

  @Get('organisations/:id')
  async getOrganistionById(
    @Param('id') id: string,
  ): Promise<OrganisationsModel> {
    return this.organisationService.organisation({ OrganisationId: String(id) });
  }

  @Get('organisations')
  async getPublishedOrganisations(): Promise<OrganisationsModel[]> {
    return this.organisationService.organisations({
      where: {},
    });
  }

  @Get('filtered-organsations/:searchString')
  async getFilteredOrganisations(
    @Param('searchString') searchString: string,
  ): Promise<OrganisationsModel[]> {
    return this.organisationService.organisations({
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
  ): Promise<OrganisationsModel> {
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
    return this.organisationService.createOrganisation({
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

  @Put('organisations/:id')
  async publishOrganisation(
    @Param('id') id: string,
  ): Promise<OrganisationsModel> {
    return this.organisationService.updateOrganisation({
      where: { OrganisationId: String(id) },
      data: { OrganisationName: '' },
    });
  }

  @Delete('organisations/id')
  async deleteOrganisation(
    @Param('id') id: string,
  ): Promise<OrganisationsModel> {
    return this.organisationService.deleteOrganisation({ OrganisationId: String(id) });
  }
}
