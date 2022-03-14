import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'lib-gp-device-details-widget-config',
  templateUrl: './gp-device-details-widget-config.component.html',
  styleUrls: ['./gp-device-details-widget-config.component.css']
})
export class GpDeviceDetailsWidgetConfigComponent implements OnInit {
  @Input() config: any = {};
  constructor() { }
  ngOnInit() {
  }
 }
