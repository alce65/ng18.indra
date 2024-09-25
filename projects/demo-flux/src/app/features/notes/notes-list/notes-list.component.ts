import {
  Component,
  ElementRef,
  inject,
  OnInit,
  signal,
  ViewChild,
} from '@angular/core';
import { Note } from '../../../entities/note';
import { JsonPipe } from '@angular/common';
import { NoteItemComponent } from '../note-item/note-item.component';
import { NoteAddComponent } from '../note-add/note-add.component';
import { NotesRxStorageService } from '../services/notes-rx-storage.service';

const NOTES: Note[] = [
  {
    id: crypto.randomUUID(),
    title: 'Nota 1',
    author: 'Autor 1',
    isImportant: true,
  },
  {
    id: crypto.randomUUID(),
    title: 'Nota 2',
    author: 'Autor 2',
    isImportant: false,
  },
  {
    id: crypto.randomUUID(),
    title: 'Nota 3',
    author: 'Autor 3',
    isImportant: true,
  },
  {
    id: crypto.randomUUID(),
    title: 'Nota 4',
    author: 'Autor 4',
    isImportant: false,
  },
  {
    id: crypto.randomUUID(),
    title: 'Nota 5',
    author: 'Autor 5',
    isImportant: true,
  },
];

const getNotes = (): Promise<Note[]> =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(NOTES);
    }, 200);
  });

@Component({
  selector: 'ind-notes-list',
  standalone: true,
  imports: [JsonPipe, NoteItemComponent, NoteAddComponent],
  template: `
    <details #details>
      <summary>Añade una Nota</summary>
      <ind-note-add (addEvent)="add($event)" />
    </details>

    <ul>
      @for (item of notes(); track item.id) {
        <li>
          <ind-note-item
            [item]="item"
            (deleteEvent)="delete($event)"
            (changeEvent)="update($event)"
          />
        </li>
      } @empty {
        <li>Cargando notas</li>
      }
    </ul>

    <!-- <pre>{{ this.notes | json }}</pre> -->
  `,
  styles: `
    ul {
      list-style: none;
      padding: 0;
    }
  `,
})
export class NotesListComponent implements OnInit {
  notes = signal<Note[]>([]);
  @ViewChild('details') detailsRef!: ElementRef<HTMLDetailsElement>;
  storage = inject(NotesRxStorageService);

  ngOnInit() {
    this.load();
  }

  load() {
    try {
      const notes = this.storage.getNotes();
      this.notes.set(notes());
      if (this.notes.length === 0) {
        getNotes().then((notes) => {
          this.notes.set(notes);
          this.storage.saveNotes(this.notes());
        });
      }
    } catch (error) {
      console.log((error as Error).message);
    }
  }

  delete(note: Note) {
    // Estrategia optimista
    const oldNotes = this.notes;
    this.notes.set(this.notes().filter((n) => n.id !== note.id));
    try {
      this.storage.saveNotes(this.notes());
    } catch (error) {
      this.notes = oldNotes;
      console.log((error as Error).message);
    }
  }

  update(note: Note) {
    // Estrategia NO optimista
    const newNotes = this.notes().map((n) => (n.id === note.id ? note : n));
    try {
      this.storage.saveNotes(newNotes);
      this.notes.set(newNotes);
    } catch (error) {
      console.log((error as Error).message);
    }
  }

  add(data: Pick<Note, 'title' | 'author'>) {
    const newNote: Note = {
      id: crypto.randomUUID(),
      isImportant: false,
      ...data,
    };
    const newNotes = [...this.notes(), newNote];
    try {
      this.storage.saveNotes(newNotes);
      this.notes.set(newNotes);
    } catch (error) {
      console.log((error as Error).message);
    }
    this.detailsRef.nativeElement.open = false;
  }
}
