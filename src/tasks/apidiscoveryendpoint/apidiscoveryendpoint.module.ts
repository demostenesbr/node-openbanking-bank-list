import { Module } from '@nestjs/common';
import { PrismaService } from '../../tasks/participant/prisma.service';
import { SharedModule } from './../../shared/sharedModule';
import { APIDiscoveryEndpointController } from './apidiscoveryendpoint.controller';
import { APIDiscoveryEndpointService } from './apidiscoveryendpoint.service';
import { APIDiscoveryEndpoint } from './entities/apidiscoveryendpoint.entity';

@Module({
  imports: [APIDiscoveryEndpoint, SharedModule],
  controllers: [APIDiscoveryEndpointController],
  providers: [APIDiscoveryEndpointService, PrismaService],
})
export class ApidiscoveryendpointModule {}
