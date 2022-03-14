import { TestBed } from '@angular/core/testing';

import { GpDeviceDetailsWidgetService } from './gp-device-details-widget.service';

describe('GpDeviceDetailsWidgetService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GpDeviceDetailsWidgetService = TestBed.get(GpDeviceDetailsWidgetService);
    expect(service).toBeTruthy();
  });
});
