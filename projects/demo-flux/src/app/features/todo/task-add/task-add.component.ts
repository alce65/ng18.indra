import { Component, ElementRef, inject, viewChild } from '@angular/core';
import { Task } from '../../../entities/task';
import { FormsModule } from '@angular/forms';
// import { TaskStateService } from '../../../services/task-state.service';
import { TaskStateSignalsService } from '../../../services/task-state-signals.service';

@Component({
  selector: 'ind-task-add',
  standalone: true,
  imports: [FormsModule],
  template: `
    <details #details>
      <summary>Añade una tarea</summary>
      <input type="text" placeholder="Título" [(ngModel)]="data.title" />
      <input type="text" placeholder="Responsable" [(ngModel)]="data.owner" />
      <button type="button" (click)="sendAdd()">Añadir</button>
    </details>
  `,
  styles: ``,
})
export class TaskAddComponent {
  // private taskService = inject(TaskStateService);
  private taskService = inject(TaskStateSignalsService);
  // @Output() addEvent = new EventEmitter<Pick<Task, 'title' | 'owner'>>();
  data: Pick<Task, 'title' | 'owner'> = {
    title: '',
    owner: '',
  };
  detailsRef = viewChild<ElementRef<HTMLDetailsElement>>('details');

  sendAdd() {
    // this.addEvent.emit(this.data);
    this.detailsRef()!.nativeElement.open = false;
    this.taskService.add(this.data);
  }
}
