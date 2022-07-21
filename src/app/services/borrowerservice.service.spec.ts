import { TestBed } from '@angular/core/testing';

import { BorrowerserviceService } from './borrowerservice.service';

describe('BorrowerserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BorrowerserviceService = TestBed.get(BorrowerserviceService);
    expect(service).toBeTruthy();
  });
});
