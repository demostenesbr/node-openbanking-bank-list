import { Module } from '@nestjs/common';
import { APIResourceController } from './apiresource.controller';
import { APIResourceService } from './apiresource.service';

@Module({
  controllers: [APIResourceController],
  providers: [APIResourceService]
})
export class APIResourceModule {}
