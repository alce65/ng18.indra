import { Component, inject } from '@angular/core';
import { TaskStateService } from '../../services/task-state.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'ind-home',
  standalone: true,
  imports: [AsyncPipe],
  template: `
    <h2>Página de inicio</h2>
    <p>Número de tareas: {{ (tasks$ | async)!.length }}</p>
  `,
  styles: ``,
})
export default class HomeComponent {
  protected tasks$ = inject(TaskStateService).tasks$;
}
