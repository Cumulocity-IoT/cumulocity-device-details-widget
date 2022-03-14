import { InventoryService, IdentityService, IResultList, IManagedObject } from '@c8y/client';
import { HttpClient } from '@angular/common/http';
export declare class GpDeviceDetailsWidgetService {
    inventory: InventoryService;
    private http;
    identity: IdentityService;
    restItems: any;
    constructor(inventory: InventoryService, http: HttpClient, identity: IdentityService);
    response: any;
    deviceExternalId: any;
    restItemsUrl: string;
    getAllDevices(id: string, pageToGet: number, allDevices: {
        data: any[];
        res: any;
    }): Promise<IResultList<IManagedObject>>;
    getDeviceData(config: any): Promise<any>;
    getExternalId(id: any): Promise<string>;
    getRestItems(url: any): Promise<any>;
    getExternalIdForDevice(config: any): Promise<any>;
}
