/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Component,
  ElementRef,
  inject,
  OnInit,
  ViewChild,
} from '@angular/core';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { TaskItemComponent } from '../task-item/task-item.component';
import { TaskAddComponent } from '../task-add/task-add.component';
import { Task } from '../../../entities/task';
import { TaskStateService } from '../../../services/task-state.service';
import { TaskStateSignalsService } from '../../../services/task-state-signals.service';

@Component({
  selector: 'ind-tasks-list',
  standalone: true,
  imports: [JsonPipe, AsyncPipe, TaskItemComponent, TaskAddComponent],
  template: `
    <ind-task-add />
    <!-- <h3>Tareas</h3>
    <ul>
      @for (item of tasks$ | async; track item.id) {
        <li>
          <ind-task-item [item]="item" />
        </li>
      } @empty {
        <li>Cargando tareas</li>
      }
    </ul> -->
    <h3>Tareas mediante signals</h3>
    <ul>
      @for (item of tasks(); track item.id) {
        <li>
          <ind-task-item [item]="item" />
        </li>
      } @empty {
        <li>Cargando tareas (Signals())</li>
      }
    </ul>

    <!-- <pre>{{ this.tasks | json }}</pre> -->
  `,
  styles: `
    ul {
      list-style: none;
      padding: 0;
    }
  `,
})
export class TasksListComponent implements OnInit {
  // private taskService = inject(TaskStateService);
  // protected tasks$ = this.taskService.tasks$;

  private taskSignalService = inject(TaskStateSignalsService);
  protected tasks = this.taskSignalService.tasks;

  ngOnInit() {
    // this.taskService.load();
    this.taskSignalService.load();
  }
}
