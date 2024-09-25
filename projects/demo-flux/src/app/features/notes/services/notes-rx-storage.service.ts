import { computed, Injectable, Signal } from '@angular/core';
import { Note } from '../../../entities/note';

@Injectable({
  providedIn: 'root',
})
export class NotesRxStorageService {
  storageName = 'notes';

  getNotes(): Signal<Note[]> {
    const data = localStorage.getItem(this.storageName) ?? '[]';
    return computed(() => JSON.parse(data));
  }

  saveNotes(notes: Note[]): Signal<void> {
    localStorage.setItem(this.storageName, JSON.stringify(notes));
    return computed(() => undefined);
  }

  deleteNotes(): Signal<boolean> {
    localStorage.removeItem(this.storageName);
    return computed(() => true);
  }
}
