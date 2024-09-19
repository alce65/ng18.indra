import { Injectable } from '@angular/core';
import { Note } from '../../../entities/note';

@Injectable({
  providedIn: 'root',
})
export class NotesStorageService {
  storageName = 'notes';

  getNotes(): Note[] {
    const data = localStorage.getItem(this.storageName) ?? '[]';
    return JSON.parse(data);
  }

  saveNotes(notes: Note[]): void {
    localStorage.setItem(this.storageName, JSON.stringify(notes));
  }
}
