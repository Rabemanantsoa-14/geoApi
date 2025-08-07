import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GeometrieModule } from './geometrie/geometrie.module';  // ton module Geo (service + controller)

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }), // config globale .env
    GeometrieModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
