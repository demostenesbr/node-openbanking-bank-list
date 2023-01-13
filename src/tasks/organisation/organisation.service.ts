import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../tasks/participant/prisma.service';
import { Organisation, Prisma } from '@prisma/client';

@Injectable()
export class OrganisationService {
  constructor(private prisma: PrismaService) {}

  async organisationById(
    organisationWhereUniqueInput: Prisma.OrganisationWhereUniqueInput,
  ): Promise<Organisation | null> {
    return this.prisma.organisation.findUnique({
      where: organisationWhereUniqueInput,
    });
  }

  async publishOrganisation(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.OrganisationWhereUniqueInput;
    where?: Prisma.OrganisationWhereInput;
    orderBy?: Prisma.OrganisationOrderByWithRelationInput;
  }): Promise<Organisation[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.organisation.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async createOrganisation(data: Prisma.OrganisationCreateInput): Promise<Organisation> {
    return this.prisma.organisation.create({
      data,
    });
  }

  async updateOrganisation(params: {
    where: Prisma.OrganisationWhereUniqueInput;
    data: Prisma.OrganisationUpdateInput;
  }): Promise<Organisation> {
    const { data, where } = params;
    return this.prisma.organisation.update({
      data,
      where,
    });
  }

  async deleteOrganisation(where: Prisma.OrganisationWhereUniqueInput): Promise<Organisation> {
    return this.prisma.organisation.delete({
      where,
    });
  }
}