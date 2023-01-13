import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../tasks/participant/prisma.service';
import { APIResource, Prisma } from '@prisma/client';
@Injectable()
export class APIResourceService {
  constructor(private prisma: PrismaService) {}

  async APIResourceById(
    aPIResourceWhereUniqueInput: Prisma.APIResourceWhereUniqueInput,
  ): Promise<APIResource | null> {
    return this.prisma.aPIResource.findUnique({
      where: aPIResourceWhereUniqueInput,
    });
  }

  async publishAPIResource(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.APIResourceWhereUniqueInput;
    where?: Prisma.APIResourceWhereInput;
    orderBy?: Prisma.APIResourceOrderByWithRelationInput;
  }): Promise<APIResource[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.aPIResource.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async createAPIResource(data: Prisma.APIResourceCreateInput): Promise<APIResource> {
    return this.prisma.aPIResource.create({
      data,
    });
  }

  async updateAPIResource(params: {
    where: Prisma.APIResourceWhereUniqueInput;
    data: Prisma.APIResourceUpdateInput;
  }): Promise<APIResource> {
    const { data, where } = params;
    return this.prisma.aPIResource.update({
      data,
      where,
    });
  }

  async deleteAPIResource(where: Prisma.APIResourceWhereUniqueInput): Promise<APIResource> {
    return this.prisma.aPIResource.delete({
      where,
    });
  }
}
