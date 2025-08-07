import { Injectable } from '@nestjs/common';
import axios from 'axios';
import * as dotenv from 'dotenv';

dotenv.config();

@Injectable()
export class GeometrieService {
  private baseUrl = process.env.GEOSERVER_URL;
  private workspace = process.env.GEOSERVER_WORKSPACE;
  private authHeader = {
    headers: {
      Authorization:
        'Basic ' +
        Buffer.from(`${process.env.GEOSERVER_USER}:${process.env.GEOSERVER_PASS}`).toString('base64'),
    },
  };

  async getListeCouches() {
    const url = `${this.baseUrl}/rest/workspaces/${this.workspace}/layers.json`;

    const response = await axios.get(url, this.authHeader);
    return response.data.layers.layer.map((l) => l.name);
  }

  async getGeoJson(nom: string) {
    const url = `${this.baseUrl}/${this.workspace}/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=${this.workspace}:${nom}&outputFormat=application/json`;
    const response = await axios.get(url, this.authHeader);
    return response.data;
  }

  async proxyWms(query: any) {
    const url = `${this.baseUrl}/${this.workspace}/wms`;
    const response = await axios.get(url, {
      params: query,
      responseType: 'stream',
      headers: this.authHeader.headers,
    });
    return response.data;
  }

  async proxyWmsByLayer(layerName: string, query: any) {
    const url = `${this.baseUrl}/${this.workspace}/wms`;

    const params = {
      ...query,
      layers: `${this.workspace}:${layerName}`,
    };

    const response = await axios.get(url, {
      params,
      responseType: 'stream',
      headers: this.authHeader.headers,
    });

    return response.data;
  }

}
