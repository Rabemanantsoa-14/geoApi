import { Module } from '@nestjs/common';
import { GeometrieService } from './geometrie.service';
import { GeometrieController } from './geometrie.controller';

@Module({
  controllers: [GeometrieController],
  providers: [GeometrieService],
})
export class GeometrieModule {}
