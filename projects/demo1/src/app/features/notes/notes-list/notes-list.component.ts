import {
  Component,
  ElementRef,
  inject,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Note } from '../../../entities/note';
import { JsonPipe } from '@angular/common';
import { NoteItemComponent } from '../note-item/note-item.component';
import { NoteAddComponent } from '../note-add/note-add.component';
import { NotesRxStorageService } from '../services/notes-rx-storage.service';
// import { NotesStorageService } from '../services/notes-storage.service';
// import { NotesAsyncStorageService } from '../services/notes-async-storage.service';

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
      @for (item of notes; track item.id) {
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
  notes: Note[] = [];
  @ViewChild('details') detailsRef!: ElementRef<HTMLDetailsElement>;
  storage = inject(NotesRxStorageService);

  ngOnInit() {
    this.load();
  }

  load() {
    this.storage.getNotes().subscribe({
      next: (notes) => {
        this.notes = notes;
        if (this.notes.length === 0) {
          getNotes().then((notes) => {
            this.notes = notes;
            this.storage.saveNotes(this.notes).subscribe();
          });
        }
      },
      error: (error: Error) => {
        console.log(error.message);
      },
    });
  }

  delete(note: Note) {
    // Estrategia optimista
    const oldNotes = this.notes;
    this.notes = this.notes.filter((n) => n.id !== note.id);
    const subscription = this.storage.saveNotes(this.notes).subscribe({
      error: (error: Error) => {
        this.notes = oldNotes;
        console.log(error.message);
      },
    });
    subscription.unsubscribe();
  }

  update(note: Note) {
    // Estrategia NO optimista
    const newNotes = this.notes.map((n) => (n.id === note.id ? note : n));
    const subscription = this.storage.saveNotes(newNotes).subscribe({
      complete: () => {
        this.notes = newNotes;
      },
      error: (error: Error) => {
        console.log(error.message);
      },
    });
    subscription.unsubscribe();
  }

  add(data: Pick<Note, 'title' | 'author'>) {
    const newNote: Note = {
      id: crypto.randomUUID(),
      isImportant: false,
      ...data,
    };
    const newNotes = [...this.notes, newNote];

    const subscription = this.storage.saveNotes(newNotes).subscribe({
      complete: () => {
        this.notes = newNotes;
        this.detailsRef.nativeElement.open = false;
      },
      error: (error: Error) => {
        console.log(error.message);
        this.detailsRef.nativeElement.open = false;
      },
    });
    subscription.unsubscribe();
  }
}
