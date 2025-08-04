import { Injectable } from '@nestjs/common';
import { Pool } from 'pg';
import * as dotenv from 'dotenv';

dotenv.config(); // load .env file

@Injectable()
export class RecupererZonageService {
  private pool: Pool;

  constructor() {
    this.pool = new Pool({
      user: process.env.DB_USERNAME,
      host: process.env.DB_HOST,
      database: process.env.DB_NAME,
      password: process.env.DB_PASSWORD,
      port: Number(process.env.DB_PORT),
    });
  }

  async getZonageGeoJSON(): Promise<any> {
    const client = await this.pool.connect();

    try {
      const result = await client.query(`
        SELECT gid, zone AS type, ST_AsGeoJSON(geom) AS geom 
        FROM zonage_fianarantsoa 
      `);

      const features = result.rows.map(row => ({
        type: 'Feature',
        geometry: JSON.parse(row.geom),
        properties: {
          id: row.id,
          type: row.type,
        },
      }));

      return {
        type: 'FeatureCollection',
        features,
      };
    } finally {
      client.release();
    }
  }
}




