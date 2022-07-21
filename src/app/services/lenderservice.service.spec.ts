import { TestBed } from '@angular/core/testing';

import { LenderserviceService } from './lenderservice.service';

describe('LenderserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LenderserviceService = TestBed.get(LenderserviceService);
    expect(service).toBeTruthy();
  });
});
