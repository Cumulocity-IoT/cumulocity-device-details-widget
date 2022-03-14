import { __awaiter } from "tslib";
import { Component, Input } from '@angular/core';
import { GpDeviceDetailsWidgetService } from './gp-device-details-widget.service';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { InventoryService, IdentityService } from '@c8y/client';
export class GpDeviceDetailsWidgetComponent {
    constructor(http, datePipe, device, inventory, identity) {
        this.http = http;
        this.datePipe = datePipe;
        this.device = device;
        this.inventory = inventory;
        this.identity = identity;
        this.URL = '';
        this.deviceUrl = '';
    }
    ngOnInit() {
        return __awaiter(this, void 0, void 0, function* () {
            // tslint:disable-next-line: no-unused-expression
            (this.config);
            this.deviceExtId = yield this.device.getDeviceData(this.config);
            this.URL = this.config.deviceDetailsUrl;
            this.deviceUrl = this.URL + this.deviceExtId;
            this.getDeviceDetails().subscribe((devData) => {
                // tslint:disable-next-line: no-unused-expression
                (devData);
                if (devData[this.mainList][0]) {
                    this.deviceDetails = devData[this.mainList][0];
                }
                else {
                    this.deviceDetails = devData[this.mainList];
                }
            });
            if (this.config) {
                this.mainList = this.config.mainListName;
                this.deviceDataColumnName = this.config.tableColumnNames.split(',');
                // tslint:disable-next-line: no-unused-expression
                (this.deviceDataColumnName);
                this.deviceDataColumnvalues = this.config.tableColumnValues.split(',');
            }
        });
    }
    getDeviceDetails() {
        return this.http.get(this.deviceUrl);
    }
}
GpDeviceDetailsWidgetComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-gp-device-details-widget',
                template: "\r\n<div class=\"example-card\">\r\n  <div>\r\n    <div class=\"card-content\">\r\n      <div class=\"card-content-item\">\r\n        <div *ngFor=\"let col of deviceDataColumnName\">\r\n          <span class=\"text-truncate\"><small class=\"text-muted\">{{col}}:</small></span>\r\n        </div>\r\n      </div>\r\n      <div *ngIf=\"this.deviceDetails\">\r\n        <div class=\"card-content-item card-text-value\">\r\n          <div *ngFor=\"let col of deviceDataColumnvalues\">\r\n            <span class=\"text-truncate\" title=\"{{this.deviceDetails[col]}}\"><small\r\n                class=\"text-muted\">{{this.deviceDetails[col]}}</small></span>\r\n                \r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>",
                styles: [".mat-card{padding:0 0 0 9px;box-shadow:none}.card-content{display:flex;font-size:14px}.card-content-item{padding:5px}.card-content-item span{padding:3px;display:block;max-width:150px;font-size:14px}.card-text-value span{overflow:hidden;white-space:nowrap;text-overflow:ellipsis;display:block;width:100px;font-size:14px}"]
            },] }
];
GpDeviceDetailsWidgetComponent.ctorParameters = () => [
    { type: HttpClient },
    { type: DatePipe },
    { type: GpDeviceDetailsWidgetService },
    { type: InventoryService },
    { type: IdentityService }
];
GpDeviceDetailsWidgetComponent.propDecorators = {
    config: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3AtZGV2aWNlLWRldGFpbHMtd2lkZ2V0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2dwLWRldmljZS1kZXRhaWxzLXdpZGdldC9zcmMvbGliL2dwLWRldmljZS1kZXRhaWxzLXdpZGdldC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUVsRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFM0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLGVBQWUsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQU1oRSxNQUFNLE9BQU8sOEJBQThCO0lBVXpDLFlBQW9CLElBQWdCLEVBQ2hCLFFBQWtCLEVBQ2xCLE1BQW9DLEVBQ3JDLFNBQTJCLEVBQzNCLFFBQXlCO1FBSnhCLFNBQUksR0FBSixJQUFJLENBQVk7UUFDaEIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUNsQixXQUFNLEdBQU4sTUFBTSxDQUE4QjtRQUNyQyxjQUFTLEdBQVQsU0FBUyxDQUFrQjtRQUMzQixhQUFRLEdBQVIsUUFBUSxDQUFpQjtRQVY1QyxRQUFHLEdBQUcsRUFBRSxDQUFDO1FBQ1QsY0FBUyxHQUFHLEVBQUUsQ0FBQztJQVVYLENBQUM7SUFDQyxRQUFROztZQUNaLGlEQUFpRDtZQUNqRCxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNkLElBQUksQ0FBQyxXQUFXLEdBQUcsTUFBTSxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDaEUsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDO1lBQ3hDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO1lBQzdDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFO2dCQUM1QyxpREFBaUQ7Z0JBQ2pELENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ1YsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO29CQUM3QixJQUFJLENBQUMsYUFBYSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQ2hEO3FCQUFNO29CQUNMLElBQUksQ0FBQyxhQUFhLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztpQkFDN0M7WUFDSCxDQUFDLENBQUMsQ0FBQztZQUNILElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtnQkFDZixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDO2dCQUN6QyxJQUFJLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ3BFLGlEQUFpRDtnQkFDakQsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQztnQkFDNUIsSUFBSSxDQUFDLHNCQUFzQixHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQ3hFO1FBQ0gsQ0FBQztLQUFBO0lBQ0QsZ0JBQWdCO1FBQ2QsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDdkMsQ0FBQzs7O1lBOUNGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsOEJBQThCO2dCQUN4Qyx1d0JBQTZDOzthQUU5Qzs7O1lBVFEsVUFBVTtZQUVWLFFBQVE7WUFIUiw0QkFBNEI7WUFLNUIsZ0JBQWdCO1lBQUUsZUFBZTs7O3FCQVF2QyxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEdwRGV2aWNlRGV0YWlsc1dpZGdldFNlcnZpY2UgfSBmcm9tICcuL2dwLWRldmljZS1kZXRhaWxzLXdpZGdldC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBEYXRlUGlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEdwRGV2aWNlRGV0YWlsc1dpZGdldENvbmZpZ0NvbXBvbmVudCB9IGZyb20gJy4vZ3AtZGV2aWNlLWRldGFpbHMtd2lkZ2V0LWNvbmZpZy9ncC1kZXZpY2UtZGV0YWlscy13aWRnZXQtY29uZmlnLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEludmVudG9yeVNlcnZpY2UsIElkZW50aXR5U2VydmljZSB9IGZyb20gJ0BjOHkvY2xpZW50JztcclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdsaWItZ3AtZGV2aWNlLWRldGFpbHMtd2lkZ2V0JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vZ3AtZGV2aWNlLWRldGFpbHMtd2lnZXQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJ2NhcmQtZmFuY3ktZXhhbXBsZS5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgR3BEZXZpY2VEZXRhaWxzV2lkZ2V0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBkZXZpY2VEYXRhQ29sdW1uTmFtZTogW107XHJcbiAgQElucHV0KCkgY29uZmlnO1xyXG4gIGRldmljZUV4dElkOiBhbnk7XHJcbiAgVVJMID0gJyc7XHJcbiAgZGV2aWNlVXJsID0gJyc7XHJcbiAgZGV2aWNlRGV0YWlsczogYW55O1xyXG4gIGRldmljZURhdGFDb2x1bW52YWx1ZXM6IFtdO1xyXG4gIGNvbHVtbnM6IFtdO1xyXG4gIG1haW5MaXN0OiBhbnk7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgZGF0ZVBpcGU6IERhdGVQaXBlLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgZGV2aWNlOiBHcERldmljZURldGFpbHNXaWRnZXRTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgIHB1YmxpYyBpbnZlbnRvcnk6IEludmVudG9yeVNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgcHVibGljIGlkZW50aXR5OiBJZGVudGl0eVNlcnZpY2UsXHJcbiAgKSB7IH1cclxuICBhc3luYyBuZ09uSW5pdCgpIHtcclxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tdW51c2VkLWV4cHJlc3Npb25cclxuICAgICh0aGlzLmNvbmZpZyk7XHJcbiAgICB0aGlzLmRldmljZUV4dElkID0gYXdhaXQgdGhpcy5kZXZpY2UuZ2V0RGV2aWNlRGF0YSh0aGlzLmNvbmZpZyk7XHJcbiAgICB0aGlzLlVSTCA9IHRoaXMuY29uZmlnLmRldmljZURldGFpbHNVcmw7XHJcbiAgICB0aGlzLmRldmljZVVybCA9IHRoaXMuVVJMICsgdGhpcy5kZXZpY2VFeHRJZDtcclxuICAgIHRoaXMuZ2V0RGV2aWNlRGV0YWlscygpLnN1YnNjcmliZSgoZGV2RGF0YSkgPT4ge1xyXG4gICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLXVudXNlZC1leHByZXNzaW9uXHJcbiAgICAgIChkZXZEYXRhKTtcclxuICAgICAgaWYgKGRldkRhdGFbdGhpcy5tYWluTGlzdF1bMF0pIHtcclxuICAgICAgICB0aGlzLmRldmljZURldGFpbHMgPSBkZXZEYXRhW3RoaXMubWFpbkxpc3RdWzBdO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuZGV2aWNlRGV0YWlscyA9IGRldkRhdGFbdGhpcy5tYWluTGlzdF07XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgaWYgKHRoaXMuY29uZmlnKSB7XHJcbiAgICAgIHRoaXMubWFpbkxpc3QgPSB0aGlzLmNvbmZpZy5tYWluTGlzdE5hbWU7XHJcbiAgICAgIHRoaXMuZGV2aWNlRGF0YUNvbHVtbk5hbWUgPSB0aGlzLmNvbmZpZy50YWJsZUNvbHVtbk5hbWVzLnNwbGl0KCcsJyk7XHJcbiAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tdW51c2VkLWV4cHJlc3Npb25cclxuICAgICAgKHRoaXMuZGV2aWNlRGF0YUNvbHVtbk5hbWUpO1xyXG4gICAgICB0aGlzLmRldmljZURhdGFDb2x1bW52YWx1ZXMgPSB0aGlzLmNvbmZpZy50YWJsZUNvbHVtblZhbHVlcy5zcGxpdCgnLCcpO1xyXG4gICAgfVxyXG4gIH1cclxuICBnZXREZXZpY2VEZXRhaWxzKCk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLmRldmljZVVybCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==