import { Injectable } from '@angular/core';
import { Note } from '../../../entities/note';

@Injectable({
  providedIn: 'root',
})
export class NotesAsyncStorageService {
  storageName = 'notes';

  async getNotes(): Promise<Note[]> {
    const data = localStorage.getItem(this.storageName) ?? '[]';
    return JSON.parse(data);
  }

  async saveNotes(notes: Note[]): Promise<void> {
    localStorage.setItem(this.storageName, JSON.stringify(notes));
  }

  async deleteNotes(): Promise<void> {
    localStorage.removeItem(this.storageName);
  }
}
