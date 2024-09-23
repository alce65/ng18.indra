import { Component, EventEmitter, Output } from '@angular/core';
import { Task } from '../../../entities/task';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'ind-task-add',
  standalone: true,
  imports: [FormsModule],
  template: `
    <input type="text" placeholder="Título" [(ngModel)]="data.title" />
    <input type="text" placeholder="Responsable" [(ngModel)]="data.owner" />
    <button type="button" (click)="sendAdd()">Añadir</button>
  `,
  styles: ``,
})
export class TaskAddComponent {
  @Output() addEvent = new EventEmitter<Pick<Task, 'title' | 'owner'>>();
  data: Pick<Task, 'title' | 'owner'> = {
    title: '',
    owner: '',
  };

  sendAdd() {
    this.addEvent.emit(this.data);
  }
}
