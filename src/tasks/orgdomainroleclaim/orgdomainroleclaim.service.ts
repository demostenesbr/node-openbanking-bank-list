import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../tasks/participant/prisma.service';
import { OrgDomainRoleClaim, Prisma } from '@prisma/client';

@Injectable()
export class OrgDomainRoleClaimService {
  constructor(private prisma: PrismaService) {}

  async OrgDomainRoleClaimById(
    OrgDomainRoleClaimWhereUniqueInput: Prisma.OrgDomainRoleClaimWhereUniqueInput,
  ): Promise<OrgDomainRoleClaim | null> {
    return this.prisma.orgDomainRoleClaim.findUnique({
      where: OrgDomainRoleClaimWhereUniqueInput,
    });
  }

  async publishOrgDomainRoleClaim(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.OrgDomainRoleClaimWhereUniqueInput;
    where?: Prisma.OrgDomainRoleClaimWhereInput;
    orderBy?: Prisma.OrgDomainRoleClaimOrderByWithRelationInput;
  }): Promise<OrgDomainRoleClaim[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.orgDomainRoleClaim.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async createOrgDomainRoleClaim(data: Prisma.OrgDomainRoleClaimCreateInput): Promise<OrgDomainRoleClaim> {
    return this.prisma.orgDomainRoleClaim.create({
      data,
    });
  }

  async updateOrgDomainRoleClaim(params: {
    where: Prisma.OrgDomainRoleClaimWhereUniqueInput;
    data: Prisma.OrgDomainRoleClaimUpdateInput;
  }): Promise<OrgDomainRoleClaim> {
    const { data, where } = params;
    return this.prisma.orgDomainRoleClaim.update({
      data,
      where,
    });
  }

  async deleteOrgDomainRoleClaim(where: Prisma.OrgDomainRoleClaimWhereUniqueInput): Promise<OrgDomainRoleClaim> {
    return this.prisma.orgDomainRoleClaim.delete({
      where,
    });
  }
}