"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeometrieService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("axios");
const dotenv = require("dotenv");
dotenv.config();
let GeometrieService = class GeometrieService {
    baseUrl = process.env.GEOSERVER_URL;
    workspace = process.env.GEOSERVER_WORKSPACE;
    authHeader = {
        headers: {
            Authorization: 'Basic ' +
                Buffer.from(`${process.env.GEOSERVER_USER}:${process.env.GEOSERVER_PASS}`).toString('base64'),
        },
    };
    async getListeCouches() {
        const url = `${this.baseUrl}/rest/workspaces/${this.workspace}/layers.json`;
        const response = await axios_1.default.get(url, this.authHeader);
        return response.data.layers.layer.map((l) => l.name);
    }
    async getGeoJson(nom) {
        const url = `${this.baseUrl}/${this.workspace}/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=${this.workspace}:${nom}&outputFormat=application/json`;
        const response = await axios_1.default.get(url, this.authHeader);
        return response.data;
    }
    async proxyWms(query) {
        const url = `${this.baseUrl}/${this.workspace}/wms`;
        const response = await axios_1.default.get(url, {
            params: query,
            responseType: 'stream',
            headers: this.authHeader.headers,
        });
        return response.data;
    }
    async proxyWmsByLayer(layerName, query) {
        const url = `${this.baseUrl}/${this.workspace}/wms`;
        const params = {
            ...query,
            layers: `${this.workspace}:${layerName}`,
        };
        const response = await axios_1.default.get(url, {
            params,
            responseType: 'stream',
            headers: this.authHeader.headers,
        });
        return response.data;
    }
};
exports.GeometrieService = GeometrieService;
exports.GeometrieService = GeometrieService = __decorate([
    (0, common_1.Injectable)()
], GeometrieService);
//# sourceMappingURL=geometrie.service.js.map