/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Component,
  ElementRef,
  inject,
  OnInit,
  ViewChild,
} from '@angular/core';
import { JsonPipe } from '@angular/common';
import { TaskItemComponent } from '../task-item/task-item.component';
import { TaskAddComponent } from '../task-add/task-add.component';
import { Task } from '../../../entities/task';
import { TasksFetchApiRepoService } from '../services/tasks-fetch-api-repo.service';
import { TasksRxApiRepoService } from '../services/tasks-rx-api-repo.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'ind-tasks-list',
  standalone: true,
  imports: [JsonPipe, TaskItemComponent, TaskAddComponent],
  template: `
    <details #details>
      <summary>Añade una tarea</summary>
      <ind-task-add (addEvent)="add($event)" />
    </details>

    <ul>
      @for (item of tasks; track item.id) {
        <li>
          <ind-task-item
            [item]="item"
            (deleteEvent)="delete($event)"
            (changeEvent)="update($event)"
          />
        </li>
      } @empty {
        <li>Cargando notas</li>
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
  tasks: Task[] = [];
  @ViewChild('details') detailsRef!: ElementRef<HTMLDetailsElement>;

  private repo = inject(TasksFetchApiRepoService);
  private repoRx = inject(TasksRxApiRepoService);

  ngOnInit() {
    this.load();
  }

  load() {
    // this.repo
    //   .getAll()
    //   .then((tasks) => {
    //     this.tasks = tasks;
    //   })
    //   .catch((error: Error) => {
    //     console.log(error.message);
    //   });

    const subs = this.repoRx.getAll().subscribe({
      next: (tasks) => {
        this.tasks = tasks;
        subs.unsubscribe();
      },
      error: (error: HttpErrorResponse) => {
        console.log(error);
        subs.unsubscribe();
      },
    });
  }

  add(data: Pick<Task, 'title' | 'owner'>) {
    const newTask: Omit<Task, 'id'> = {
      isCompleted: false,
      ...data,
    };

    // this.repo
    //   .add(newTask)
    //   .then((newTask) => {
    //     this.tasks = [...this.tasks, newTask];
    //     this.detailsRef.nativeElement.open = false;
    //     console.log(this.tasks);
    //   })
    //   .catch((error: Error) => {
    //     console.log(error.message);
    //   });

    const subs = this.repoRx.add(newTask).subscribe({
      next: (newTask) => {
        this.tasks = [...this.tasks, newTask];
        this.detailsRef.nativeElement.open = false;
        console.log(this.tasks);
        subs.unsubscribe();
      },
      error: (error: HttpErrorResponse) => {
        console.log(error);
        subs.unsubscribe();
      },
    });
  }

  delete(task: Task) {
    // this.repo
    //   .delete(task.id)
    //   .then(() => {
    //     this.tasks = this.tasks.filter((n) => n.id !== task.id);
    //     console.log(this.tasks);
    //   })
    //   .catch((error: Error) => {
    //     console.log(error.message);
    //   });

    const subs = this.repoRx.delete(task.id).subscribe({
      next: () => {
        this.tasks = this.tasks.filter((n) => n.id !== task.id);
        console.log(this.tasks);
        subs.unsubscribe();
      },
      error: (error: HttpErrorResponse) => {
        console.log(error);
        subs.unsubscribe();
      },
    });
  }

  update(task: Task) {
    const { id, ...taskData } = task;

    // this.repo
    // .update(id, taskData)
    // .then((updatedTask) => {
    //   this.tasks = this.tasks.map((n) => (n.id === id ? updatedTask : n));
    //   console.log(this.tasks);
    // })
    // .catch((error: Error) => {
    //   console.log(error.message);
    // });

    const subs = this.repoRx.update(id, taskData).subscribe({
      next: (updatedTask) => {
        this.tasks = this.tasks.map((n) => (n.id === id ? updatedTask : n));
        console.log(this.tasks);
        subs.unsubscribe();
      },
      error: (error: HttpErrorResponse) => {
        console.log(error);
        subs.unsubscribe();
      },
    });
  }
}
