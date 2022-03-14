import { NgModule } from '@angular/core';
import { HOOK_COMPONENTS, CoreModule } from '@c8y/ngx-components';
import * as preview from './preview-image';
import { GpDeviceDetailsWidgetComponent } from './gp-device-details-widget.component';
import { HttpClientModule, HttpClient, } from '@angular/common/http';
import { GpDeviceDetailsWidgetService } from './gp-device-details-widget.service';
import { DatePipe } from '@angular/common';
import { GpDeviceDetailsWidgetConfigComponent } from './gp-device-details-widget-config/gp-device-details-widget-config.component';
const ɵ0 = {
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
};
export class GpDeviceDetailsWidgetModule {
}
GpDeviceDetailsWidgetModule.decorators = [
    { type: NgModule, args: [{
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
                        useValue: ɵ0
                    }
                ],
            },] }
];
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3AtZGV2aWNlLWRldGFpbHMtd2lkZ2V0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2dwLWRldmljZS1kZXRhaWxzLXdpZGdldC9zcmMvbGliL2dwLWRldmljZS1kZXRhaWxzLXdpZGdldC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsZUFBZSxFQUFFLFVBQVUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ2xFLE9BQU8sS0FBSyxPQUFPLE1BQU0saUJBQWlCLENBQUE7QUFDMUMsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDdEYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLFVBQVUsR0FBRyxNQUFNLHNCQUFzQixDQUFDO0FBQ3JFLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ2xGLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QyxPQUFPLEVBQUUsb0NBQW9DLEVBQUUsTUFBTSw2RUFBNkUsQ0FBQztXQWdCckg7SUFDTixFQUFFLEVBQUUsOEJBQThCO0lBQ2xDLFlBQVksRUFBRSxPQUFPLENBQUMsWUFBWTtJQUNsQyxLQUFLLEVBQUUsZ0JBQWdCO0lBQ3ZCLFdBQVcsRUFBRSxvRUFBb0U7SUFDakYsU0FBUyxFQUFFLDhCQUE4QjtJQUN6QyxlQUFlLEVBQUUsb0NBQW9DO0lBQ3JELElBQUksRUFBRTtRQUNGLEdBQUcsRUFBRTtZQUNELE9BQU8sRUFBRTtnQkFDVCxjQUFjLEVBQUUsS0FBSztnQkFDckIsWUFBWSxFQUFFLEtBQUs7Z0JBQ25CLHVCQUF1QixFQUFFLEtBQUs7Z0JBQzlCLGdCQUFnQixFQUFFLElBQUk7YUFDckI7U0FDSjtLQUNKO0NBQ0o7QUFHTCxNQUFNLE9BQU8sMkJBQTJCOzs7WUFuQ3ZDLFFBQVEsU0FBQztnQkFDUixZQUFZLEVBQUUsQ0FBQyw4QkFBOEIsRUFBRSxvQ0FBb0MsQ0FBQztnQkFDcEYsT0FBTyxFQUFFO29CQUNQLFVBQVU7b0JBQ1YsZ0JBQWdCO2lCQUNqQjtnQkFDRCxPQUFPLEVBQUUsQ0FBQyw4QkFBOEIsRUFBRSxvQ0FBb0MsQ0FBQztnQkFDL0UsZUFBZSxFQUFFLENBQUMsOEJBQThCLEVBQUUsb0NBQW9DLENBQUM7Z0JBQ3ZGLFNBQVMsRUFBRTtvQkFDVCxVQUFVO29CQUNWLFFBQVE7b0JBQ1IsNEJBQTRCO29CQUM1Qjt3QkFDQSxPQUFPLEVBQUUsZUFBZTt3QkFDeEIsS0FBSyxFQUFFLElBQUk7d0JBQ1gsUUFBUSxJQWlCUDtxQkFDQTtpQkFBQzthQUNMIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSE9PS19DT01QT05FTlRTLCBDb3JlTW9kdWxlIH0gZnJvbSAnQGM4eS9uZ3gtY29tcG9uZW50cyc7XHJcbmltcG9ydCAqIGFzIHByZXZpZXcgZnJvbSAnLi9wcmV2aWV3LWltYWdlJ1xyXG5pbXBvcnQgeyBHcERldmljZURldGFpbHNXaWRnZXRDb21wb25lbnQgfSBmcm9tICcuL2dwLWRldmljZS1kZXRhaWxzLXdpZGdldC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlLCBIdHRwQ2xpZW50LCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgR3BEZXZpY2VEZXRhaWxzV2lkZ2V0U2VydmljZSB9IGZyb20gJy4vZ3AtZGV2aWNlLWRldGFpbHMtd2lkZ2V0LnNlcnZpY2UnO1xyXG5pbXBvcnQge0RhdGVQaXBlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBHcERldmljZURldGFpbHNXaWRnZXRDb25maWdDb21wb25lbnQgfSBmcm9tICcuL2dwLWRldmljZS1kZXRhaWxzLXdpZGdldC1jb25maWcvZ3AtZGV2aWNlLWRldGFpbHMtd2lkZ2V0LWNvbmZpZy5jb21wb25lbnQnO1xyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW0dwRGV2aWNlRGV0YWlsc1dpZGdldENvbXBvbmVudCwgR3BEZXZpY2VEZXRhaWxzV2lkZ2V0Q29uZmlnQ29tcG9uZW50XSxcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb3JlTW9kdWxlLFxyXG4gICAgSHR0cENsaWVudE1vZHVsZVxyXG4gIF0sXHJcbiAgZXhwb3J0czogW0dwRGV2aWNlRGV0YWlsc1dpZGdldENvbXBvbmVudCwgR3BEZXZpY2VEZXRhaWxzV2lkZ2V0Q29uZmlnQ29tcG9uZW50XSxcclxuICBlbnRyeUNvbXBvbmVudHM6IFtHcERldmljZURldGFpbHNXaWRnZXRDb21wb25lbnQsIEdwRGV2aWNlRGV0YWlsc1dpZGdldENvbmZpZ0NvbXBvbmVudF0sXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICBIdHRwQ2xpZW50LFxyXG4gICAgRGF0ZVBpcGUsXHJcbiAgICBHcERldmljZURldGFpbHNXaWRnZXRTZXJ2aWNlLFxyXG4gICAge1xyXG4gICAgcHJvdmlkZTogSE9PS19DT01QT05FTlRTLFxyXG4gICAgbXVsdGk6IHRydWUsXHJcbiAgICB1c2VWYWx1ZToge1xyXG4gICAgICAgIGlkOiAnZGV2aWNlLmRldGFpbHMubWF0LmRhc2hib2FyZCcsXHJcbiAgICAgICAgcHJldmlld0ltYWdlOiBwcmV2aWV3LnByZXZpZXdJbWFnZSxcclxuICAgICAgICBsYWJlbDogJ0RldmljZSBEZXRhaWxzJyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogJ0RldmljZSBkZXRhaWxzIERhc2hib2FyZCAtIERpc3BsYXkgZGV2aWNlIGRldGFpbHMgaW4gdGhlIGRhc2hib2FyZCcsXHJcbiAgICAgICAgY29tcG9uZW50OiBHcERldmljZURldGFpbHNXaWRnZXRDb21wb25lbnQsXHJcbiAgICAgICAgY29uZmlnQ29tcG9uZW50OiBHcERldmljZURldGFpbHNXaWRnZXRDb25maWdDb21wb25lbnQsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICBuZzE6IHtcclxuICAgICAgICAgICAgICAgIG9wdGlvbnM6IHtcclxuICAgICAgICAgICAgICAgIG5vRGV2aWNlVGFyZ2V0OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIG5vTmV3V2lkZ2V0czogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBkZXZpY2VUYXJnZXROb3RSZXF1aXJlZDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBncm91cHNTZWxlY3RhYmxlOiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICB9XSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEdwRGV2aWNlRGV0YWlsc1dpZGdldE1vZHVsZSB7IH1cclxuIl19