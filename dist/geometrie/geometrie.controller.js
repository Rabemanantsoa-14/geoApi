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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeometrieController = void 0;
const common_1 = require("@nestjs/common");
const geometrie_service_1 = require("./geometrie.service");
let GeometrieController = class GeometrieController {
    geoService;
    constructor(geoService) {
        this.geoService = geoService;
    }
    async getLayers() {
        return this.geoService.getListeCouches();
    }
    async getGeoJson(layerName) {
        return this.geoService.getGeoJson(layerName);
    }
    async proxyWms(query, res) {
        const stream = await this.geoService.proxyWms(query);
        stream.pipe(res);
    }
    async getWmsByLayer(layerName, query, res) {
        const stream = await this.geoService.proxyWmsByLayer(layerName, query);
        stream.pipe(res);
    }
};
exports.GeometrieController = GeometrieController;
__decorate([
    (0, common_1.Get)('layers'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], GeometrieController.prototype, "getLayers", null);
__decorate([
    (0, common_1.Get)('geojson/:layerName'),
    __param(0, (0, common_1.Param)('layerName')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], GeometrieController.prototype, "getGeoJson", null);
__decorate([
    (0, common_1.Get)('wms'),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], GeometrieController.prototype, "proxyWms", null);
__decorate([
    (0, common_1.Get)('wms/:layerName'),
    __param(0, (0, common_1.Param)('layerName')),
    __param(1, (0, common_1.Query)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", Promise)
], GeometrieController.prototype, "getWmsByLayer", null);
exports.GeometrieController = GeometrieController = __decorate([
    (0, common_1.Controller)('geo'),
    __metadata("design:paramtypes", [geometrie_service_1.GeometrieService])
], GeometrieController);
//# sourceMappingURL=geometrie.controller.js.map