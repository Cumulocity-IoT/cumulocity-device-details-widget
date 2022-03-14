import { __awaiter } from "tslib";
import { Injectable } from '@angular/core';
import { InventoryService, IdentityService } from '@c8y/client';
import { HttpClient } from '@angular/common/http';
export class GpDeviceDetailsWidgetService {
    constructor(inventory, http, identity) {
        this.inventory = inventory;
        this.http = http;
        this.identity = identity;
        // tslint:disable-next-line: max-line-length
        this.restItemsUrl = 'http://democenter.gateway.webmethodscloud.com/gateway/DemoCenterAPIs/1.0/ConnectedDemosAPI/restSvc/getServiceRequestsForADevice/00001239';
    }
    getAllDevices(id, pageToGet, allDevices) {
        const inventoryFilter = {
            pageSize: 50,
            withTotalPages: true,
            currentPage: pageToGet
        };
        if (!allDevices) {
            allDevices = { data: [], res: null };
        }
        return new Promise((resolve, reject) => {
            this.inventory.childAssetsList(id, inventoryFilter)
                .then((resp) => {
                if (resp.res.status === 200) {
                    if (resp.data && resp.data.length >= 0) {
                        allDevices.data.push.apply(allDevices.data, resp.data);
                        if (resp.data.length < inventoryFilter.pageSize) {
                            resolve(allDevices);
                        }
                        else {
                            this.getAllDevices(id, resp.paging.nextPage, allDevices)
                                .then((np) => {
                                resolve(allDevices);
                            })
                                .catch((err) => reject(err));
                        }
                    }
                }
                else {
                    reject(resp);
                }
            });
        });
    }
    getDeviceData(config) {
        return __awaiter(this, void 0, void 0, function* () {
            const inventory = yield this.inventory.detail(config.device.id);
            this.response = inventory.data;
            // tslint:disable-next-line: no-unused-expression
            (this.response);
            if (this.response.hasOwnProperty('c8y_IsDevice')) {
                this.deviceExternalId = yield this.getExternalId(config.device.id);
                // tslint:disable-next-line: no-unused-expression
                ('Child Device = ' + config.device.id);
                // tslint:disable-next-line: no-unused-expression
                ('External ID = ' + this.deviceExternalId);
            }
            else {
                alert('Please select a device for this widget to fuction correctly');
            }
            return this.deviceExternalId;
        });
    }
    getExternalId(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const { data, res, paging } = yield this.identity.list(id);
            return data[0].externalId;
        });
    }
    getRestItems(url) {
        return __awaiter(this, void 0, void 0, function* () {
            this.restItems = yield this.http.get(url).toPromise();
            return this.restItems;
        });
    }
    getExternalIdForDevice(config) {
        return __awaiter(this, void 0, void 0, function* () {
            const inventory = yield this.inventory.detail(config.device.id);
            this.response = inventory.data;
            if (this.response.hasOwnProperty('c8y_IsDevice')) {
                this.deviceExternalId = yield this.getExternalId(config.device.id);
            }
            else {
                alert('Please select a device for this widget to fuction correctly');
            }
            return this.deviceExternalId;
        });
    }
}
GpDeviceDetailsWidgetService.decorators = [
    { type: Injectable }
];
GpDeviceDetailsWidgetService.ctorParameters = () => [
    { type: InventoryService },
    { type: HttpClient },
    { type: IdentityService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3AtZGV2aWNlLWRldGFpbHMtd2lkZ2V0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9ncC1kZXZpY2UtZGV0YWlscy13aWRnZXQvc3JjL2xpYi9ncC1kZXZpY2UtZGV0YWlscy13aWRnZXQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsZUFBZSxFQUErQixNQUFNLGFBQWEsQ0FBQztBQUM3RixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFbEQsTUFBTSxPQUFPLDRCQUE0QjtJQUV2QyxZQUFtQixTQUEyQixFQUFVLElBQWdCLEVBQ3JELFFBQXlCO1FBRHpCLGNBQVMsR0FBVCxTQUFTLENBQWtCO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUNyRCxhQUFRLEdBQVIsUUFBUSxDQUFpQjtRQUcxQyw0Q0FBNEM7UUFDNUMsaUJBQVksR0FBRywwSUFBMEksQ0FBQztJQUo1RyxDQUFDO0lBSy9DLGFBQWEsQ0FBQyxFQUFVLEVBQUUsU0FBaUIsRUFBRSxVQUFxQztRQUNoRixNQUFNLGVBQWUsR0FBRztZQUN0QixRQUFRLEVBQUUsRUFBRTtZQUNaLGNBQWMsRUFBRSxJQUFJO1lBQ3BCLFdBQVcsRUFBRSxTQUFTO1NBQ3ZCLENBQUM7UUFDRixJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ2YsVUFBVSxHQUFHLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLENBQUM7U0FDdEM7UUFDRCxPQUFPLElBQUksT0FBTyxDQUNoQixDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtZQUNsQixJQUFJLENBQUMsU0FBUyxDQUFDLGVBQWUsQ0FBQyxFQUFFLEVBQUUsZUFBZSxDQUFDO2lCQUNoRCxJQUFJLENBQUMs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QUFRLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQyxFQUFFO2dCQUNoRCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsTUFBTSxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7YUFDcEU7aUJBQU07Z0JBQ0wsS0FBSyxDQUFDLDZEQUE2RCxDQUFDLENBQUM7YUFDdEU7WUFDRCxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztRQUMvQixDQUFDO0tBQUE7OztZQTFFSixVQUFVOzs7WUFGRixnQkFBZ0I7WUFDaEIsVUFBVTtZQURRLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEludmVudG9yeVNlcnZpY2UsIElkZW50aXR5U2VydmljZSwgSVJlc3VsdExpc3QsIElNYW5hZ2VkT2JqZWN0IH0gZnJvbSAnQGM4eS9jbGllbnQnO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBHcERldmljZURldGFpbHNXaWRnZXRTZXJ2aWNlIHtcclxuICByZXN0SXRlbXM6IGFueTtcclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgaW52ZW50b3J5OiBJbnZlbnRvcnlTZXJ2aWNlLCBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsXHJcbiAgICAgICAgICAgICAgcHVibGljIGlkZW50aXR5OiBJZGVudGl0eVNlcnZpY2UpIHsgfVxyXG4gICAgcmVzcG9uc2U6IGFueTtcclxuICAgIGRldmljZUV4dGVybmFsSWQ6IGFueTtcclxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbWF4LWxpbmUtbGVuZ3RoXHJcbiAgICByZXN0SXRlbXNVcmwgPSAnaHR0cDovL2RlbW9jZW50ZXIuZ2F0ZXdheS53ZWJtZXRob2RzY2xvdWQuY29tL2dhdGV3YXkvRGVtb0NlbnRlckFQSXMvMS4wL0Nvbm5lY3RlZERlbW9zQVBJL3Jlc3RTdmMvZ2V0U2VydmljZVJlcXVlc3RzRm9yQURldmljZS8wMDAwMTIzOSc7XHJcbiAgICBnZXRBbGxEZXZpY2VzKGlkOiBzdHJpbmcsIHBhZ2VUb0dldDogbnVtYmVyLCBhbGxEZXZpY2VzOiB7IGRhdGE6IGFueVtdLCByZXM6IGFueSB9KTogUHJvbWlzZTxJUmVzdWx0TGlzdDxJTWFuYWdlZE9iamVjdD4+IHtcclxuICAgICAgY29uc3QgaW52ZW50b3J5RmlsdGVyID0ge1xyXG4gICAgICAgIHBhZ2VTaXplOiA1MCxcclxuICAgICAgICB3aXRoVG90YWxQYWdlczogdHJ1ZSxcclxuICAgICAgICBjdXJyZW50UGFnZTogcGFnZVRvR2V0XHJcbiAgICAgIH07XHJcbiAgICAgIGlmICghYWxsRGV2aWNlcykge1xyXG4gICAgICAgIGFsbERldmljZXMgPSB7IGRhdGE6IFtdLCByZXM6IG51bGwgfTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoXHJcbiAgICAgICAgKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5pbnZlbnRvcnkuY2hpbGRBc3NldHNMaXN0KGlkLCBpbnZlbnRvcnlGaWx0ZXIpXHJcbiAgICAgICAgICAgIC50aGVuKChyZXNwKSA9PiB7XHJcbiAgICAgICAgICAgICAgaWYgKHJlc3AucmVzLnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzcC5kYXRhICYmIHJlc3AuZGF0YS5sZW5ndGggPj0gMCkge1xyXG4gICAgICAgICAgICAgICAgICBhbGxEZXZpY2VzLmRhdGEucHVzaC5hcHBseShhbGxEZXZpY2VzLmRhdGEsIHJlc3AuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgIGlmIChyZXNwLmRhdGEubGVuZ3RoIDwgaW52ZW50b3J5RmlsdGVyLnBhZ2VTaXplKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShhbGxEZXZpY2VzKTtcclxuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdldEFsbERldmljZXMoaWQsIHJlc3AucGFnaW5nLm5leHRQYWdlLCBhbGxEZXZpY2VzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKG5wKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoYWxsRGV2aWNlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHJlamVjdChlcnIpKTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZWplY3QocmVzcCk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGFzeW5jIGdldERldmljZURhdGEoY29uZmlnKSB7XHJcbiAgICAgY29uc3QgaW52ZW50b3J5ID0gYXdhaXQgdGhpcy5pbnZlbnRvcnkuZGV0YWlsKGNvbmZpZy5kZXZpY2UuaWQpO1xyXG4gICAgIHRoaXMucmVzcG9uc2UgPSBpbnZlbnRvcnkuZGF0YTtcclxuICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLXVudXNlZC1leHByZXNzaW9uXHJcbiAgICAgKHRoaXMucmVzcG9uc2UpO1xyXG4gICAgIGlmICh0aGlzLnJlc3BvbnNlLmhhc093blByb3BlcnR5KCdjOHlfSXNEZXZpY2UnKSkge1xyXG4gICAgICAgIHRoaXMuZGV2aWNlRXh0ZXJuYWxJZCA9IGF3YWl0IHRoaXMuZ2V0RXh0ZXJuYWxJZChjb25maWcuZGV2aWNlLmlkKTtcclxuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLXVudXNlZC1leHByZXNzaW9uXHJcbiAgICAgICAgKCdDaGlsZCBEZXZpY2UgPSAnICsgY29uZmlnLmRldmljZS5pZCk7XHJcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby11bnVzZWQtZXhwcmVzc2lvblxyXG4gICAgICAgICgnRXh0ZXJuYWwgSUQgPSAnICsgdGhpcy5kZXZpY2VFeHRlcm5hbElkKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBhbGVydCgnUGxlYXNlIHNlbGVjdCBhIGRldmljZSBmb3IgdGhpcyB3aWRnZXQgdG8gZnVjdGlvbiBjb3JyZWN0bHknKTtcclxuICAgICAgfVxyXG4gICAgIHJldHVybiB0aGlzLmRldmljZUV4dGVybmFsSWQ7XHJcbiAgfVxyXG4gIGFzeW5jIGdldEV4dGVybmFsSWQoaWQpIHtcclxuICAgIGNvbnN0IHsgZGF0YSwgcmVzLCBwYWdpbmcgfSA9IGF3YWl0IHRoaXMuaWRlbnRpdHkubGlzdChpZCk7XHJcbiAgICByZXR1cm4gZGF0YVswXS5leHRlcm5hbElkO1xyXG4gIH1cclxuICBhc3luYyBnZXRSZXN0SXRlbXModXJsKTogUHJvbWlzZTxhbnk+ICB7XHJcbiAgICB0aGlzLnJlc3RJdGVtcyA9IGF3YWl0IHRoaXMuaHR0cC5nZXQodXJsKS50b1Byb21pc2UoKTtcclxuICAgIHJldHVybiB0aGlzLnJlc3RJdGVtcztcclxuICAgIH1cclxuICAgIGFzeW5jIGdldEV4dGVybmFsSWRGb3JEZXZpY2UoY29uZmlnKSB7XHJcbiAgICAgIGNvbnN0IGludmVudG9yeSA9IGF3YWl0IHRoaXMuaW52ZW50b3J5LmRldGFpbChjb25maWcuZGV2aWNlLmlkKTtcclxuICAgICAgdGhpcy5yZXNwb25zZSA9IGludmVudG9yeS5kYXRhO1xyXG4gICAgICBpZiAodGhpcy5yZXNwb25zZS5oYXNPd25Qcm9wZXJ0eSgnYzh5X0lzRGV2aWNlJykpIHtcclxuICAgICAgICB0aGlzLmRldmljZUV4dGVybmFsSWQgPSBhd2FpdCB0aGlzLmdldEV4dGVybmFsSWQoY29uZmlnLmRldmljZS5pZCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgYWxlcnQoJ1BsZWFzZSBzZWxlY3QgYSBkZXZpY2UgZm9yIHRoaXMgd2lkZ2V0IHRvIGZ1Y3Rpb24gY29ycmVjdGx5Jyk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHRoaXMuZGV2aWNlRXh0ZXJuYWxJZDtcclxuICAgIH1cclxuICB9XHJcblxyXG4iXX0=