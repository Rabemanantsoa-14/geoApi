"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BatimentModule = void 0;
const common_1 = require("@nestjs/common");
const batiment_service_1 = require("./batiment.service");
const batiment_controller_1 = require("./batiment.controller");
let BatimentModule = class BatimentModule {
};
exports.BatimentModule = BatimentModule;
exports.BatimentModule = BatimentModule = __decorate([
    (0, common_1.Module)({
        controllers: [batiment_controller_1.BatimentController],
        providers: [batiment_service_1.BatimentService],
    })
], BatimentModule);
//# sourceMappingURL=batiment.module.js.map