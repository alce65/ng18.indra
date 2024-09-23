/* eslint-disable @typescript-eslint/no-unused-vars */
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { TaskItemComponent } from '../task-item/task-item.component';
import { TaskAddComponent } from '../task-add/task-add.component';
import { Task } from '../../../entities/task';
import { environment } from '../../../../environments/environment.development';

const TASKS: Task[] = [
  {
    id: crypto.randomUUID(),
    title: 'Tarea 1',
    owner: 'Pepe',
    isCompleted: true,
  },
  {
    id: crypto.randomUUID(),
    title: 'Tarea 2',
    owner: 'Elena',
    isCompleted: false,
  },
  {
    id: crypto.randomUUID(),
    title: 'Tarea 3',
    owner: 'Pepe',
    isCompleted: true,
  },
];

const getTasks = async (): Promise<Task[]> => {
  const url = environment.urlBase + '/tasks';
  const resp = await fetch(url);
  return resp.json();
};

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

  ngOnInit() {
    this.load();
  }

  load() {
    getTasks().then((tasks) => {
      this.tasks = tasks;
    });

    // this.storage.getTasks().subscribe({
    //   next: (tasks) => {
    //     this.tasks = tasks;
    //     if (this.tasks.length === 0) {
    //       getTasks().then((tasks) => {
    //         this.tasks = tasks;
    //         this.storage.saveTasks(this.tasks).subscribe();
    //       });
    //     }
    //   },
    //   error: (error: Error) => {
    //     console.log(error.message);
    //   },
    // });
  }

  delete(task: Task) {
    this.tasks = this.tasks.filter((n) => n.id !== task.id);
    console.log(this.tasks);
    //   // Estrategia optimista
    //   const oldTasks = this.tasks;
    //   this.tasks = this.tasks.filter((n) => n.id !== task.id);
    //   const subscription = this.storage.saveTasks(this.tasks).subscribe({
    //     error: (error: Error) => {
    //       this.tasks = oldTasks;
    //       console.log(error.message);
    //     },
    //   });
    //   subscription.unsubscribe();
  }

  update(task: Task) {
    const newTasks = this.tasks.map((n) => (n.id === task.id ? task : n));
    this.tasks = newTasks;
    console.log(this.tasks);

    //   // Estrategia NO optimista
    //   const newTasks = this.tasks.map((n) => (n.id === task.id ? task : n));
    //   const subscription = this.storage.saveTasks(newTasks).subscribe({
    //     complete: () => {
    //       this.tasks = newTasks;
    //     },
    //     error: (error: Error) => {
    //       console.log(error.message);
    //     },
    //   });
    //   subscription.unsubscribe();
  }

  add(data: Pick<Task, 'title' | 'owner'>) {
    const newTask: Task = {
      id: crypto.randomUUID(),
      isCompleted: false,
      ...data,
    };
    const newTasks = [...this.tasks, newTask];
    this.tasks = newTasks;
    this.detailsRef.nativeElement.open = false;
    console.log(this.tasks);

    //   const newTask: Task = {
    //     id: crypto.randomUUID(),
    //     isImportant: false,
    //     ...data,
    //   };
    //   const newTasks = [...this.tasks, newTask];
    //   const subscription = this.storage.saveTasks(newTasks).subscribe({
    //     complete: () => {
    //       this.tasks = newTasks;
    //       this.detailsRef.nativeElement.open = false;
    //     },
    //     error: (error: Error) => {
    //       console.log(error.message);
    //       this.detailsRef.nativeElement.open = false;
    //     },
    //   });
    //   subscription.unsubscribe();
  }
}
