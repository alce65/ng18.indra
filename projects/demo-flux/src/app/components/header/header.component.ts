import { Component, inject, Input } from '@angular/core';
import { TaskStateService } from '../../services/task-state.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'ind-header',
  standalone: true,
  imports: [AsyncPipe],
  template: `
    <header>
      <h1>{{ appTitle }}</h1>
      <ng-content select="ind-menu"></ng-content>
    </header>
    <ng-content select="p"></ng-content>
    <p>Número de tareas: {{ (tasks$ | async)!.length }}</p>
  `,
  styles: ['h1 { font-family: Lato; color: blue; }'],
})
export class HeaderComponent {
  @Input({
    required: true,
  })
  appTitle!: string;
  protected tasks$ = inject(TaskStateService).tasks$;
}
