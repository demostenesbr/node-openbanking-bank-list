import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Organisations, Prisma } from '@prisma/client';

@Injectable()
export class OrganisationsService {
  constructor(private prisma: PrismaService) {}

  async organisation(
    organisationsWhereUniqueInput: Prisma.OrganisationsWhereUniqueInput,
  ): Promise<Organisations | null> {
    return this.prisma.organisations.findUnique({
      where: organisationsWhereUniqueInput,
    });
  }

  async organisations(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.OrganisationsWhereUniqueInput;
    where?: Prisma.OrganisationsWhereInput;
    orderBy?: Prisma.OrganisationsOrderByWithRelationInput;
  }): Promise<Organisations[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.organisations.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async createOrganisation(data: Prisma.OrganisationsCreateInput): Promise<Organisations> {
    return this.prisma.organisations.create({
      data,
    });
  }

  async updateOrganisation(params: {
    where: Prisma.OrganisationsWhereUniqueInput;
    data: Prisma.OrganisationsUpdateInput;
  }): Promise<Organisations> {
    const { data, where } = params;
    return this.prisma.organisations.update({
      data,
      where,
    });
  }

  async deleteOrganisation(where: Prisma.OrganisationsWhereUniqueInput): Promise<Organisations> {
    return this.prisma.organisations.delete({
      where,
    });
  }
}