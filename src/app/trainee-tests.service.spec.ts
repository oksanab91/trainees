import { TestBed } from '@angular/core/testing';

import { TraineeTestsService } from './trainee-tests.service';

describe('TraineeTestsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TraineeTestsService = TestBed.get(TraineeTestsService);
    expect(service).toBeTruthy();
  });
});
