import { Component, input, output } from '@angular/core';
import { Note } from '../../../entities/note';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'ind-note-item',
  standalone: true,
  imports: [FormsModule],
  template: `
    <input
      type="checkbox"
      [(ngModel)]="item().isImportant"
      (change)="sendChange()"
    />
    <p [title]="item().id">{{ item().title }}</p>
    <p>{{ item().author }}</p>
    <button (click)="sendDelete()">🗑️</button>
  `,
  styles: `
    :host {
      display: flex;
      gap: 1rem;
      padding: 1rem;
      border: 1px solid #ccc;
      margin: 1rem 0;
    }
    button {
      background: none;
      border: none;
      cursor: pointer;
    }
  `,
})
export class NoteItemComponent {
  // @Input({ required: true }) item!: Note;

  item = input.required<Note>();
  deleteEvent = output<Note>();
  changeEvent = output<Note>();

  // ngOnInit(): void {
  //   this.item.set({ ...this.item });
  // }

  sendDelete() {
    console.log('delete', this.item().id);
    this.deleteEvent.emit(this.item());
  }

  sendChange() {
    console.log('change', this.item);
    this.changeEvent.emit(this.item());
  }
}
