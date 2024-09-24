import { TestBed } from '@angular/core/testing';

import { TasksRxApiRepoService } from './tasks-rx-api-repo.service';

describe('TasksRxApiRepoService', () => {
  let service: TasksRxApiRepoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TasksRxApiRepoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
