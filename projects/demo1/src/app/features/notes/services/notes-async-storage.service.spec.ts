import { TestBed } from '@angular/core/testing';

import { NotesAsyncStorageService } from './notes-async-storage.service';

describe('NotesAsyncStorageService', () => {
  let service: NotesAsyncStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotesAsyncStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
