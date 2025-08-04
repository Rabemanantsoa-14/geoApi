import { Module } from '@nestjs/common';
import { RecupererZonageService } from './recuperer_zonage.service';
import { RecupererZonageController } from './recuperer_zonage.controller';

@Module({
  controllers: [RecupererZonageController],
  providers: [RecupererZonageService],
})
export class RecupererZonageModule {}
