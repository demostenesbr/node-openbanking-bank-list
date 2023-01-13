import { Module } from '@nestjs/common';
import { PrismaService } from '../../tasks/participant/prisma.service';
import { SharedModule } from './../../shared/sharedModule';
import { AuthorisationServer } from './entities/authorisationserver.entity';
import { AuthorisationServerController } from './authorisationserver.controller';
import { AuthorisationServerService } from './authorisationserver.service';

@Module({
  imports: [AuthorisationServer, SharedModule],
  controllers: [AuthorisationServerController],
  providers: [AuthorisationServerService, PrismaService],
})
export class AuthorisationServersModule {}