import { Component } from '@angular/core';
import { TasksListComponent } from './tasks-list/tasks-list.component';

@Component({
  selector: 'ind-tasks',
  standalone: true,
  imports: [TasksListComponent],
  template: `
    <h2>Lista de tareas</h2>
    <ind-tasks-list />
  `,
  styles: ``,
})
export default class TasksComponent {}
