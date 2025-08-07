export declare class GeometrieService {
    private baseUrl;
    private workspace;
    private authHeader;
    getListeCouches(): Promise<any>;
    getGeoJson(nom: string): Promise<any>;
    proxyWms(query: any): Promise<any>;
    proxyWmsByLayer(layerName: string, query: any): Promise<any>;
}
