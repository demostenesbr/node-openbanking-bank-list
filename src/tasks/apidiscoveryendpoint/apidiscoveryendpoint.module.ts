import { Module } from '@nestjs/common';
import { ApidiscoveryendpointController } from './apidiscoveryendpoint.controller';
import { ApidiscoveryendpointService } from './apidiscoveryendpoint.service';

@Module({
  controllers: [ApidiscoveryendpointController],
  providers: [ApidiscoveryendpointService]
})
export class ApidiscoveryendpointModule {}
