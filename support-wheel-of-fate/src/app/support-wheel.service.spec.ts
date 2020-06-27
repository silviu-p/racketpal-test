import { TestBed } from '@angular/core/testing';

import { SupportWheelService } from './support-wheel.service';

describe('SupportWheelService', () => {
  let service: SupportWheelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SupportWheelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
