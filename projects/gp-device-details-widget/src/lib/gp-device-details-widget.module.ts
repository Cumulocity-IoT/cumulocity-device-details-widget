import { NgModule } from '@angular/core';
import { HOOK_COMPONENTS, CoreModule } from '@c8y/ngx-components';
import * as preview from './preview-image'
import { GpDeviceDetailsWidgetComponent } from './gp-device-details-widget.component';
import { HttpClientModule, HttpClient, } from '@angular/common/http';
import { GpDeviceDetailsWidgetService } from './gp-device-details-widget.service';
import {DatePipe} from '@angular/common';
import { GpDeviceDetailsWidgetConfigComponent } from './gp-device-details-widget-config/gp-device-details-widget-config.component';
@NgModule({
  declarations: [GpDeviceDetailsWidgetComponent, GpDeviceDetailsWidgetConfigComponent],
  imports: [
    CoreModule,
    HttpClientModule
  ],
  exports: [GpDeviceDetailsWidgetComponent, GpDeviceDetailsWidgetConfigComponent],
  entryComponents: [GpDeviceDetailsWidgetComponent, GpDeviceDetailsWidgetConfigComponent],
  providers: [
    HttpClient,
    DatePipe,
    GpDeviceDetailsWidgetService,
    {
    provide: HOOK_COMPONENTS,
    multi: true,
    useValue: {
        id: 'device.details.mat.dashboard',
        previewImage: preview.previewImage,
        label: 'Device Details',
        description: 'Device details Dashboard - Display device details in the dashboard',
        component: GpDeviceDetailsWidgetComponent,
        configComponent: GpDeviceDetailsWidgetConfigComponent,
        data: {
            ng1: {
                options: {
                noDeviceTarget: false,
                noNewWidgets: false,
                deviceTargetNotRequired: false,
                groupsSelectable: true
                }
            }
        }
    }
    }],
})
export class GpDeviceDetailsWidgetModule { }
