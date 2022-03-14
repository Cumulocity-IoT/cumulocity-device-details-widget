import { Injectable } from '@angular/core';
import { InventoryService, IdentityService, IResultList, IManagedObject } from '@c8y/client';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class GpDeviceDetailsWidgetService {
  restItems: any;
  constructor(public inventory: InventoryService, private http: HttpClient,
              public identity: IdentityService) { }
    response: any;
    deviceExternalId: any;
    // tslint:disable-next-line: max-line-length
    restItemsUrl = 'http://democenter.gateway.webmethodscloud.com/gateway/DemoCenterAPIs/1.0/ConnectedDemosAPI/restSvc/getServiceRequestsForADevice/00001239';
    getAllDevices(id: string, pageToGet: number, allDevices: { data: any[], res: any }): Promise<IResultList<IManagedObject>> {
      const inventoryFilter = {
        pageSize: 50,
        withTotalPages: true,
        currentPage: pageToGet
      };
      if (!allDevices) {
        allDevices = { data: [], res: null };
      }
      return new Promise(
        (resolve, reject) => {
          this.inventory.childAssetsList(id, inventoryFilter)
            .then((resp) => {
              if (resp.res.status === 200) {
                if (resp.data && resp.data.length >= 0) {
                  allDevices.data.push.apply(allDevices.data, resp.data);
                  if (resp.data.length < inventoryFilter.pageSize) {
                    resolve(allDevices);
                  } else {
                    this.getAllDevices(id, resp.paging.nextPage, allDevices)
                      .then((np) => {
                        resolve(allDevices);
                      })
                      .catch((err) => reject(err));
                  }
                }
              } else {
                reject(resp);
              }
            });
        });
    }
    async getDeviceData(config) {
     const inventory = await this.inventory.detail(config.device.id);
     this.response = inventory.data;
     // tslint:disable-next-line: no-unused-expression
     (this.response);
     if (this.response.hasOwnProperty('c8y_IsDevice')) {
        this.deviceExternalId = await this.getExternalId(config.device.id);
        // tslint:disable-next-line: no-unused-expression
        ('Child Device = ' + config.device.id);
        // tslint:disable-next-line: no-unused-expression
        ('External ID = ' + this.deviceExternalId);
      } else {
        alert('Please select a device for this widget to fuction correctly');
      }
     return this.deviceExternalId;
  }
  async getExternalId(id) {
    const { data, res, paging } = await this.identity.list(id);
    return data[0].externalId;
  }
  async getRestItems(url): Promise<any>  {
    this.restItems = await this.http.get(url).toPromise();
    return this.restItems;
    }
    async getExternalIdForDevice(config) {
      const inventory = await this.inventory.detail(config.device.id);
      this.response = inventory.data;
      if (this.response.hasOwnProperty('c8y_IsDevice')) {
        this.deviceExternalId = await this.getExternalId(config.device.id);
      } else {
        alert('Please select a device for this widget to fuction correctly');
      }
      return this.deviceExternalId;
    }
  }

