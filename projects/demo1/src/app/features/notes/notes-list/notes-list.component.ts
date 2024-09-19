import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Note } from '../../../entities/note';
import { JsonPipe } from '@angular/common';
import { NoteItemComponent } from '../note-item/note-item.component';
import { NoteAddComponent } from '../note-add/note-add.component';

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

const getNotes = () =>
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

  ngOnInit() {
    this.load();
  }

  async load() {
    this.notes = (await getNotes()) as Note[];
  }

  delete(note: Note) {
    this.notes = this.notes.filter((n) => n.id !== note.id);
    console.log(this.notes);
  }

  update(note: Note) {
    this.notes = this.notes.map((n) => (n.id === note.id ? note : n));
    console.log(this.notes);
  }

  add(data: Pick<Note, 'title' | 'author'>) {
    const newNote: Note = {
      id: crypto.randomUUID(),
      isImportant: false,
      ...data,
    };

    // Immutable
    this.notes = [...this.notes, newNote];

    // Mutable
    this.notes.push(newNote);

    console.log(this.notes);
    this.detailsRef.nativeElement.open = false;
  }
}
