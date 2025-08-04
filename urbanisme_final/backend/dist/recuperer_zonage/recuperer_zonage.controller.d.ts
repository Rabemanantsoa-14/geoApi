import { RecupererZonageService } from './recuperer_zonage.service';
export declare class RecupererZonageController {
    private readonly recupererZonageService;
    constructor(recupererZonageService: RecupererZonageService);
    getZonageGeoJSON(): Promise<any>;
}
