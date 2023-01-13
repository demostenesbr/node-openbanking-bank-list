import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../tasks/participant/prisma.service';
import { OrgDomainClaim, Prisma } from '@prisma/client';

@Injectable()
export class OrgDomainClaimService {
  constructor(private prisma: PrismaService) {}

  async OrgDomainClaimById(
    orgDomainClaimWhereUniqueInput: Prisma.OrgDomainClaimWhereUniqueInput,
  ): Promise<OrgDomainClaim | null> {
    return this.prisma.orgDomainClaim.findUnique({
      where: orgDomainClaimWhereUniqueInput,
    });
  }

  async publishOrgDomainClaim(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.OrgDomainClaimWhereUniqueInput;
    where?: Prisma.OrgDomainClaimWhereInput;
    orderBy?: Prisma.OrgDomainClaimOrderByWithRelationInput;
  }): Promise<OrgDomainClaim[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.orgDomainClaim.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async createOrgDomainClaim(data: Prisma.OrgDomainClaimCreateInput): Promise<OrgDomainClaim> {
    return this.prisma.orgDomainClaim.create({
      data,
    });
  }

  async updateOrgDomainClaim(params: {
    where: Prisma.OrgDomainClaimWhereUniqueInput;
    data: Prisma.OrgDomainClaimUpdateInput;
  }): Promise<OrgDomainClaim> {
    const { data, where } = params;
    return this.prisma.orgDomainClaim.update({
      data,
      where,
    });
  }

  async deleteOrgDomainClaim(where: Prisma.OrgDomainClaimWhereUniqueInput): Promise<OrgDomainClaim> {
    return this.prisma.orgDomainClaim.delete({
      where,
    });
  }
}