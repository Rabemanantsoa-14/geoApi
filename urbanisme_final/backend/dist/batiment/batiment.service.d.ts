import { DataSource } from 'typeorm';
export declare class BatimentService {
    private dataSource;
    constructor(dataSource: DataSource);
    getGeoJson(): Promise<any>;
    genererLot(): Promise<any>;
    private buildLot;
}
