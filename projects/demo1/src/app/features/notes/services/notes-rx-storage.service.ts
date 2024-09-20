import { Injectable } from '@angular/core';
import { Note } from '../../../entities/note';
import { map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NotesRxStorageService {
  storageName = 'notes';

  getNotes(): Observable<Note[]> {
    const data = of(localStorage.getItem(this.storageName) ?? '[]');
    return data.pipe(map((data) => JSON.parse(data)));
  }

  saveNotes(notes: Note[]): Observable<void> {
    localStorage.setItem(this.storageName, JSON.stringify(notes));
    return of();
  }

  deleteNotes(): Observable<boolean> {
    localStorage.removeItem(this.storageName);
    return of(true);
  }
}
