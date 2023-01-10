import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { SharedModule } from 'src/shared/sharedModule';
import { Organisation } from './entities/organisation.entity';
import { OrganisationsController } from './organisations.controller';
import { OrganisationsService } from './organisations.service';

@Module({
  imports: [Organisation, SharedModule],
  controllers: [OrganisationsController],
  providers: [OrganisationsService, PrismaService],
})
export class OrganisationsModule {}
