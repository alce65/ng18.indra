import { TestBed } from '@angular/core/testing';

import { NotesRxStorageService } from './notes-rx-storage.service';

describe('NotesRxStorageService', () => {
  let service: NotesRxStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotesRxStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
