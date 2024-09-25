import { TestBed } from '@angular/core/testing';

import { TaskStateSignalsService } from './task-state-signals.service';

describe('TaskStateSignalsService', () => {
  let service: TaskStateSignalsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskStateSignalsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
