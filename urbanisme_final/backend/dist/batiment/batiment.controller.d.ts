import { BatimentService } from './batiment.service';
export declare class BatimentController {
    private readonly batimentService;
    constructor(batimentService: BatimentService);
    getGeoJson(): Promise<any>;
}
