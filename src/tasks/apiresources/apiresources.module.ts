import { Module } from '@nestjs/common';
import { ApiresourcesController } from './apiresources.controller';
import { ApiresourcesService } from './apiresources.service';

@Module({
  controllers: [ApiresourcesController],
  providers: [ApiresourcesService]
})
export class ApiresourcesModule {}
