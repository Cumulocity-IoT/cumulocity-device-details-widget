import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GpDeviceDetailsWidgetComponent } from './gp-device-details-widget.component';

describe('GpDeviceDetailsWidgetComponent', () => {
  let component: GpDeviceDetailsWidgetComponent;
  let fixture: ComponentFixture<GpDeviceDetailsWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GpDeviceDetailsWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GpDeviceDetailsWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
