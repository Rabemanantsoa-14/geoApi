"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BatimentService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
let BatimentService = class BatimentService {
    dataSource;
    constructor(dataSource) {
        this.dataSource = dataSource;
    }
    async getGeoJson() {
        const rows = await this.dataSource.query(`
      SELECT
        gid,
        osm_id,
        ST_AsGeoJSON(geom) AS geom
      FROM donne_batiment  
    `);
        const features = rows.map(row => ({
            type: 'Feature',
            geometry: JSON.parse(row.geom),
            proprieties: {
                id: row.gid,
                osm_id: row.osm_id,
            },
        }));
        return {
            type: 'FeatureCollection',
            features: features,
        };
    }
    async genererLot() {
        const rows = await this.dataSource.query(`
      SELECT
        gid,
        osm_id,
        name_4,
        name_3,
        adm4_en,
        ST_AsGeoJSON(geom) AS geom
      FROM donne_batiment
    `);
        const features = rows.map((row) => ({
            type: 'Feature',
            geometry: JSON.parse(row.geom),
            properties: {
                id: row.gid,
                osm_id: row.osm_id,
                lot: this.buildLot(row.name_4, row.name_3),
            },
        }));
        return {
            type: 'FeatureCollection',
            features,
        };
    }
    buildLot(name_4, name_3) {
        const match = name_4?.match(/^(\d+)[a-z]*\s/i);
        const arrondissement = match ? match[1].padStart(2, '0') : '00';
        const fokontany = name_3?.trim().replace(/\s+/g, '_') || 'Inconnu';
        return `Lot-Arr${arrondissement}/${fokontany}`;
    }
};
exports.BatimentService = BatimentService;
exports.BatimentService = BatimentService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeorm_1.DataSource])
], BatimentService);
//# sourceMappingURL=batiment.service.js.map