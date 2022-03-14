import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GpDeviceDetailsWidgetConfigComponent } from './gp-device-details-widget-config.component';

describe('GpDeviceDetailsWidgetConfigComponent', () => {
  let component: GpDeviceDetailsWidgetConfigComponent;
  let fixture: ComponentFixture<GpDeviceDetailsWidgetConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GpDeviceDetailsWidgetConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GpDeviceDetailsWidgetConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
