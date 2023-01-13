import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { APIResourceService } from './apiresource.service';
import { APIResource as APIResourceModel } from '@prisma/client';

@Controller()
export class APIResourceController {
  constructor(private readonly aPIResourceService: APIResourceService) {}

  @Get('apiresource')
  async getPublishedAPIResource(): Promise<APIResourceModel[]> {
    return this.aPIResourceService.publishAPIResource({
      where: {},
    });
  }

  @Get('organisation/:id')
  async getAPIResourceById(@Param('id') id: string): Promise<APIResourceModel> {
    return this.aPIResourceService.APIResourceById({
      ApiResourceId: String(id),
    });
  }

  @Get('filtered-organsations/:searchString')
  async getFilteredAPIResource(
    @Param('searchString') searchString: string,
  ): Promise<APIResourceModel[]> {
    return this.aPIResourceService.publishAPIResource({
      where: {
        OR: [
          {
            ApiResourceId: { contains: searchString },
          },
        ],
      },
    });
  }

  @Post('')
  async createDraft(
    @Body()
    APIResourceData: {
      ApiResourceId: string;
      ApiVersion: string;
      FamilyComplete: boolean;
      ApiCertificationUri: string;
      CertificationStatus: string;
      CertificationStartDate: string;
      CertificationExpirationDate: string;
      ApiFamilyType: string;
    },
  ): Promise<APIResourceModel> {
    const {
      ApiVersion,
      FamilyComplete,
      ApiCertificationUri,
      CertificationStatus,
      CertificationStartDate,
      CertificationExpirationDate,
      ApiFamilyType,
    } = APIResourceData;
    return this.aPIResourceService.createAPIResource({
      ApiVersion,
      FamilyComplete,
      ApiCertificationUri,
      CertificationStatus,
      CertificationStartDate,
      CertificationExpirationDate,
      ApiFamilyType,
    });
  }

  @Put('apiresource/:id')
  async publishAPIResource(@Param('id') id: string): Promise<APIResourceModel> {
    return this.aPIResourceService.updateAPIResource({
      where: { ApiResourceId: String(id) },
      data: { ApiVersion: '' },
    });
  }

  @Delete('organisation/id')
  async deleteOrganisation(@Param('id') id: string): Promise<APIResourceModel> {
    return this.aPIResourceService.deleteAPIResource({
      ApiResourceId: String(id),
    });
  }
}
