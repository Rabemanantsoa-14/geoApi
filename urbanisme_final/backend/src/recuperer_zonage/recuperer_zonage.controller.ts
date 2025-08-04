import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RecupererZonageService } from './recuperer_zonage.service';

@Controller('recuperer-zonage')
export class RecupererZonageController {
  constructor(private readonly recupererZonageService: RecupererZonageService) {}

  @Get('geojson')
  async getZonageGeoJSON() {
    return this.recupererZonageService.getZonageGeoJSON();
  }
}

