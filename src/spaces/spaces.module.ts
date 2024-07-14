import { Module } from '@nestjs/common';
import { SpacesService } from './spaces.service';

@Module({
  controllers: [],
  providers: [SpacesService],
  exports: [SpacesService],
})
export class SpacesModule {}
