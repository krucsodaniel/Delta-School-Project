import { TestBed } from '@angular/core/testing';

import { FooterdataService } from './footerdata.service';

describe('FooterdataService', () => {
  let service: FooterdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FooterdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
