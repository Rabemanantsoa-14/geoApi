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
exports.RecupererZonageController = void 0;
const common_1 = require("@nestjs/common");
const recuperer_zonage_service_1 = require("./recuperer_zonage.service");
let RecupererZonageController = class RecupererZonageController {
    recupererZonageService;
    constructor(recupererZonageService) {
        this.recupererZonageService = recupererZonageService;
    }
    async getZonageGeoJSON() {
        return this.recupererZonageService.getZonageGeoJSON();
    }
};
exports.RecupererZonageController = RecupererZonageController;
__decorate([
    (0, common_1.Get)('geojson'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RecupererZonageController.prototype, "getZonageGeoJSON", null);
exports.RecupererZonageController = RecupererZonageController = __decorate([
    (0, common_1.Controller)('recuperer-zonage'),
    __metadata("design:paramtypes", [recuperer_zonage_service_1.RecupererZonageService])
], RecupererZonageController);
//# sourceMappingURL=recuperer_zonage.controller.js.map