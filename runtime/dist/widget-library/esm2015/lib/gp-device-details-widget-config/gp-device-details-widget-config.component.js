import { Component, Input } from '@angular/core';
export class GpDeviceDetailsWidgetConfigComponent {
    constructor() {
        this.config = {};
    }
    ngOnInit() {
    }
}
GpDeviceDetailsWidgetConfigComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-gp-device-details-widget-config',
                template: "<div class=\"form-group\">\r\n  <c8y-form-group>\r\n    <br>\r\n    <label translate>Device Details URL</label>\r\n    <input type=\"text\" name=\"config.deviceDetailsUrl\" style=\"width:100%\" [(ngModel)]=\"config.deviceDetailsUrl\">\r\n    <br>\r\n    <div class=\"form-group\">\r\n      <label translate>Name of the Main document List from API</label>\r\n      <input type=\"text\" class=\"form-control\" name=\"config.mainListName\" style=\"width:100%\" [(ngModel)]=\"config.mainListName\">\r\n    </div>\r\n    \r\n    <div class=\"form-group\">\r\n      <label translate>Table Column Headings (comma separated e.g: ID,)</label>\r\n      <input type=\"text\" name=\"config.tableColumnNames\" style=\"width:100%\" [(ngModel)]=\"config.tableColumnNames\">\r\n    </div>\r\n    \r\n    <div class=\"form-froup\">\r\n      <label translate>Table Column Names from API (comma separated e.g: id,)</label>\r\n      <input type=\"text\" name=\"config.tableColumnValues\" style=\"width:100%\" [(ngModel)]=\"config.tableColumnValues\">\r\n    </div>\r\n  \r\n  </c8y-form-group>\r\n  \r\n \r\n  \r\n</div>",
                styles: [""]
            },] }
];
GpDeviceDetailsWidgetConfigComponent.ctorParameters = () => [];
GpDeviceDetailsWidgetConfigComponent.propDecorators = {
    config: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3AtZGV2aWNlLWRldGFpbHMtd2lkZ2V0LWNvbmZpZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9ncC1kZXZpY2UtZGV0YWlscy13aWRnZXQvc3JjL2xpYi9ncC1kZXZpY2UtZGV0YWlscy13aWRnZXQtY29uZmlnL2dwLWRldmljZS1kZXRhaWxzLXdpZGdldC1jb25maWcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBTXpELE1BQU0sT0FBTyxvQ0FBb0M7SUFFL0M7UUFEUyxXQUFNLEdBQVEsRUFBRSxDQUFDO0lBQ1YsQ0FBQztJQUNqQixRQUFRO0lBQ1IsQ0FBQzs7O1lBVEYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxxQ0FBcUM7Z0JBQy9DLHdsQ0FBK0Q7O2FBRWhFOzs7O3FCQUVFLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdsaWItZ3AtZGV2aWNlLWRldGFpbHMtd2lkZ2V0LWNvbmZpZycsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2dwLWRldmljZS1kZXRhaWxzLXdpZGdldC1jb25maWcuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2dwLWRldmljZS1kZXRhaWxzLXdpZGdldC1jb25maWcuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBHcERldmljZURldGFpbHNXaWRnZXRDb25maWdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgpIGNvbmZpZzogYW55ID0ge307XHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuICBuZ09uSW5pdCgpIHtcclxuICB9XHJcbiB9XHJcbiJdfQ==