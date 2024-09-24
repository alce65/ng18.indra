import { TestBed } from '@angular/core/testing';

import { TasksFetchApiRepoService } from './tasks-fetch-api-repo.service';

describe('TasksFetchApiRepoService', () => {
  let service: TasksFetchApiRepoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TasksFetchApiRepoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
