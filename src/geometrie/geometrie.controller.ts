// src/geo/geo.controller.ts
import { Controller, Get, Param, Query, Res } from '@nestjs/common';
import { GeometrieService } from './geometrie.service';
import { Response } from 'express';

@Controller('geo')
export class GeometrieController {
  constructor(private readonly geoService: GeometrieService) {}

  // GET /geo/layers
  @Get('layers')
  async getLayers() {
    return this.geoService.getListeCouches();
  }

  // GET /geo/geojson/:layerName
  @Get('geojson/:layerName')
  async getGeoJson(@Param('layerName') layerName: string) {
    return this.geoService.getGeoJson(layerName);
  }

  // GET /geo/wms? (proxy WMS image stream)
  @Get('wms')
  async proxyWms(@Query() query: any, @Res() res: Response) {
    const stream = await this.geoService.proxyWms(query);
    stream.pipe(res);
  }

  @Get('wms/:layerName')
  async getWmsByLayer(
    @Param('layerName') layerName: string,
    @Query() query: any,
    @Res() res: Response,
  ) {
    const stream = await this.geoService.proxyWmsByLayer(layerName, query);
    stream.pipe(res);
  }

}
