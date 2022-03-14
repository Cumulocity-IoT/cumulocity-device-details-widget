import { OnInit } from '@angular/core';
import { GpDeviceDetailsWidgetService } from './gp-device-details-widget.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DatePipe } from '@angular/common';
import { InventoryService, IdentityService } from '@c8y/client';
export declare class GpDeviceDetailsWidgetComponent implements OnInit {
    private http;
    private datePipe;
    private device;
    inventory: InventoryService;
    identity: IdentityService;
    deviceDataColumnName: [];
    config: any;
    deviceExtId: any;
    URL: string;
    deviceUrl: string;
    deviceDetails: any;
    deviceDataColumnvalues: [];
    columns: [];
    mainList: any;
    constructor(http: HttpClient, datePipe: DatePipe, device: GpDeviceDetailsWidgetService, inventory: InventoryService, identity: IdentityService);
    ngOnInit(): Promise<void>;
    getDeviceDetails(): Observable<any>;
}
