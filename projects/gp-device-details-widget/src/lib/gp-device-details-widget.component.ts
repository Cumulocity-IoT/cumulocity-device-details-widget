import { Component, OnInit, Input } from '@angular/core';
import { GpDeviceDetailsWidgetService } from './gp-device-details-widget.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DatePipe } from '@angular/common';
import { GpDeviceDetailsWidgetConfigComponent } from './gp-device-details-widget-config/gp-device-details-widget-config.component';
import { InventoryService, IdentityService } from '@c8y/client';
@Component({
  selector: 'lib-gp-device-details-widget',
  templateUrl: './gp-device-details-wiget.html',
  styleUrls: ['card-fancy-example.css']
})
export class GpDeviceDetailsWidgetComponent implements OnInit {
  deviceDataColumnName: [];
  @Input() config;
  deviceExtId: any;
  URL = '';
  deviceUrl = '';
  deviceDetails: any;
  deviceDataColumnvalues: [];
  columns: [];
  mainList: any;
  constructor(private http: HttpClient,
              private datePipe: DatePipe,
              private device: GpDeviceDetailsWidgetService,
              public inventory: InventoryService,
              public identity: IdentityService,
  ) { }
  async ngOnInit() {
    // tslint:disable-next-line: no-unused-expression
    (this.config);
    this.deviceExtId = await this.device.getDeviceData(this.config);
    this.URL = this.config.deviceDetailsUrl;
    this.deviceUrl = this.URL + this.deviceExtId;
    this.getDeviceDetails().subscribe((devData) => {
      // tslint:disable-next-line: no-unused-expression
      (devData);
      if (devData[this.mainList][0]) {
        this.deviceDetails = devData[this.mainList][0];
      } else {
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
  }
  getDeviceDetails(): Observable<any> {
    return this.http.get(this.deviceUrl);
  }
}
