import { Component } from '@angular/core';
import { NotesListComponent } from './notes-list/notes-list.component';

@Component({
  selector: 'ind-notes',
  standalone: true,
  imports: [NotesListComponent],
  template: `
    <h2>Lista de notes</h2>
    <ind-notes-list />
  `,
  styles: ``,
})
export default class NotesComponent {}
