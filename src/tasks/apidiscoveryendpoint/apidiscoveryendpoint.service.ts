import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../tasks/participant/prisma.service';
import { APIDiscoveryEndpoint, Prisma } from '@prisma/client';

@Injectable()
export class APIDiscoveryEndpointService {
  constructor(private prisma: PrismaService) {}

  async APIDiscoveryEndpointById(
    APIDiscoveryEndpointWhereUniqueInput: Prisma.APIDiscoveryEndpointWhereUniqueInput,
  ): Promise<APIDiscoveryEndpoint | null> {
    return this.prisma.aPIDiscoveryEndpoint.findUnique({
      where: APIDiscoveryEndpointWhereUniqueInput,
    });
  }

  async publishAPIDiscoveryEndpoint(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.APIDiscoveryEndpointWhereUniqueInput;
    where?: Prisma.APIDiscoveryEndpointWhereInput;
    orderBy?: Prisma.APIDiscoveryEndpointOrderByWithRelationInput;
  }): Promise<APIDiscoveryEndpoint[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.aPIDiscoveryEndpoint.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async createAPIDiscoveryEndpoint(data: Prisma.APIDiscoveryEndpointCreateInput): Promise<APIDiscoveryEndpoint> {
    return this.prisma.aPIDiscoveryEndpoint.create({
      data,
    });
  }

  async updateAPIDiscoveryEndpoint(params: {
    where: Prisma.APIDiscoveryEndpointWhereUniqueInput;
    data: Prisma.APIDiscoveryEndpointUpdateInput;
  }): Promise<APIDiscoveryEndpoint> {
    const { data, where } = params;
    return this.prisma.aPIDiscoveryEndpoint.update({
      data,
      where,
    });
  }

  async deleteAPIDiscoveryEndpoint(where: Prisma.APIDiscoveryEndpointWhereUniqueInput): Promise<APIDiscoveryEndpoint> {
    return this.prisma.aPIDiscoveryEndpoint.delete({
      where,
    });
  }
}


