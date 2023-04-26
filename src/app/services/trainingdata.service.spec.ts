import { TestBed } from '@angular/core/testing';

import { TrainingdataService } from './trainingdata.service';

describe('TrainingdataService', () => {
  let service: TrainingdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrainingdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
