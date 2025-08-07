import { GeometrieService } from './geometrie.service';
import { Response } from 'express';
export declare class GeometrieController {
    private readonly geoService;
    constructor(geoService: GeometrieService);
    getLayers(): Promise<any>;
    getGeoJson(layerName: string): Promise<any>;
    proxyWms(query: any, res: Response): Promise<void>;
    getWmsByLayer(layerName: string, query: any, res: Response): Promise<void>;
}
