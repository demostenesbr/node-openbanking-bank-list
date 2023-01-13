import {
  Controller,
  Get,
  Param,
  // Post,
  // Body,
  Put,
  Delete,
} from '@nestjs/common';
import { APIDiscoveryEndpointService } from './apidiscoveryendpoint.service';
import { APIDiscoveryEndpoint as APIDiscoveryEndpointModel } from '@prisma/client';

@Controller()
export class APIDiscoveryEndpointController {
  constructor(private readonly aPIDiscoveryEndpointService: APIDiscoveryEndpointService) {}

  @Get('apidiscoveryendpoint')
  async getPublishedAPIDiscoveryEndpoint(): Promise<APIDiscoveryEndpointModel[]> {
    return this.aPIDiscoveryEndpointService.publishAPIDiscoveryEndpoint({
      where: {},
    });
  }

  @Get('apidiscoveryendpoint/:id')
  async getAPIDiscoveryEndpointById(
    @Param('id') id: string,
  ): Promise<APIDiscoveryEndpointModel> {
    return this.aPIDiscoveryEndpointService.APIDiscoveryEndpointById({ ApiDiscoveryId: String(id) });
  }

  @Get('filtered-organsations/:searchString')
  async getFilteredOrganisation(
    @Param('searchString') searchString: string,
  ): Promise<APIDiscoveryEndpointModel[]> {
    return this.aPIDiscoveryEndpointService.publishAPIDiscoveryEndpoint({
      where: {
        OR: [
          {
            ApiEndpoint: { contains: searchString },
          },
        ],
      },
    });
  }
/*
  @Post('')
  async createDraft(
    @Body()
    aPIDisconveryEndpointData: {
      ApiDiscoveryId: string;
      ApiEndpoint: string;
    },
  ): Promise<APIDiscoveryEndpointModel> {
    const {
      ApiDiscoveryId,
      ApiEndpoint,
    } = aPIDisconveryEndpointData;
    return this.aPIDiscoveryEndpointService.createAPIDiscoveryEndpoint({
      });
  }
*/
  @Put('apidiscoveryendpoint/:id')
  async publishAPIDiscoveryEndpoint(
    @Param('id') id: string,
  ): Promise<APIDiscoveryEndpointModel> {
    return this.aPIDiscoveryEndpointService.updateAPIDiscoveryEndpoint({
      where: { ApiDiscoveryId: String(id) },
      data: { ApiEndpoint: String(id) },
    });
  }

  @Delete('apidiscoveryendpoint/id')
  async deleteAPIDiscoveryEndpoint(
    @Param('id') id: string,
  ): Promise<APIDiscoveryEndpointModel> {
    return this.aPIDiscoveryEndpointService.deleteAPIDiscoveryEndpoint({ ApiDiscoveryId: String(id) });
  }
}

