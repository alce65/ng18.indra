import { TestBed } from '@angular/core/testing';

import { NotesStorageService } from './notes-storage.service';

describe('NotesStorageService', () => {
  let service: NotesStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotesStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
