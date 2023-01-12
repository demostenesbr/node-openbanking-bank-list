import { Module } from '@nestjs/common';
import { ApiresourceController } from './apiresource.controller';
import { ApiresourceService } from './apiresource.service';

@Module({
  controllers: [ApiresourceController],
  providers: [ApiresourceService]
})
export class ApiresourceModule {}
