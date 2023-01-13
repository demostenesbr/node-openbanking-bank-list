import { Module } from '@nestjs/common';
import { PrismaService } from '../../tasks/participant/prisma.service';
import { SharedModule } from './../../shared/sharedModule';
import { Organisation } from './entities/organisation.entity';
import { OrganisationController } from './organisation.controller';
import { OrganisationService } from './organisation.service';

@Module({
  imports: [Organisation, SharedModule],
  controllers: [OrganisationController],
  providers: [OrganisationService, PrismaService],
})
export class OrganisationsModule {}
