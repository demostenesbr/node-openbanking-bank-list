import { Module } from '@nestjs/common';
import { ApidiscoveryendpointsController } from './apidiscoveryendpoints.controller';
import { ApidiscoveryendpointsService } from './apidiscoveryendpoints.service';

@Module({
  controllers: [ApidiscoveryendpointsController],
  providers: [ApidiscoveryendpointsService]
})
export class ApidiscoveryendpointsModule {}
