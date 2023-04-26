import { TestBed } from '@angular/core/testing';

import { ApplicDeactiveGuardService } from './applic-deactive-guard.service';

describe('ApplicDeactiveGuardService', () => {
  let service: ApplicDeactiveGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApplicDeactiveGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
