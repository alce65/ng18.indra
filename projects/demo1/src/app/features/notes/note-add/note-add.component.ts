import { Component, EventEmitter, Output } from '@angular/core';
import { Note } from '../../../entities/note';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'ind-note-add',
  standalone: true,
  imports: [FormsModule],
  template: `
    <input type="text" placeholder="Título" [(ngModel)]="data.title" />
    <input type="text" placeholder="Autor" [(ngModel)]="data.author" />
    <button type="button" (click)="sendAdd()">Añadir</button>
  `,
  styles: ``,
})
export class NoteAddComponent {
  @Output() addEvent = new EventEmitter<Pick<Note, 'title' | 'author'>>();
  data: Pick<Note, 'title' | 'author'> = {
    title: '',
    author: '',
  };

  sendAdd() {
    this.addEvent.emit(this.data);
  }
}
