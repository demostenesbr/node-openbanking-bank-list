import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../tasks/participant/prisma.service';
import { AuthorisationServer, Prisma } from '@prisma/client';

@Injectable()
export class AuthorisationServerService {
  constructor(private prisma: PrismaService) {}

  async AuthorisationServerById(
    authorisationServerWhereUniqueInput: Prisma.AuthorisationServerWhereUniqueInput,
  ): Promise<AuthorisationServer | null> {
    return this.prisma.authorisationServer.findUnique({
      where: authorisationServerWhereUniqueInput,
    });
  }

  async publishAuthorisationServer(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.AuthorisationServerWhereUniqueInput;
    where?: Prisma.AuthorisationServerWhereInput;
    orderBy?: Prisma.AuthorisationServerOrderByWithRelationInput;
  }): Promise<AuthorisationServer[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.authorisationServer.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async createAuthorisationServer(data: Prisma.AuthorisationServerCreateInput): Promise<AuthorisationServer> {
    return this.prisma.authorisationServer.create({
      data,
    });
  }

  async updateAuthorisationServer(params: {
    where: Prisma.AuthorisationServerWhereUniqueInput;
    data: Prisma.AuthorisationServerUpdateInput;
  }): Promise<AuthorisationServer> {
    const { data, where } = params;
    return this.prisma.authorisationServer.update({
      data,
      where,
    });
  }

  async deleteAuthorisationServer(where: Prisma.AuthorisationServerWhereUniqueInput): Promise<AuthorisationServer> {
    return this.prisma.authorisationServer.delete({
      where,
    });
  }
}