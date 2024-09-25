import { inject, Injectable } from '@angular/core';
import { Task } from '../entities/task';
import { BehaviorSubject } from 'rxjs';
import { TasksRxApiRepoService } from '../features/todo/services/tasks-rx-api-repo.service';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TaskStateService {
  private tasks = new BehaviorSubject<Task[]>([]);
  public tasks$ = this.tasks.asObservable();
  private tasksError = new BehaviorSubject<string>('');
  public tasksError$ = this.tasksError.asObservable();

  private repoRx = inject(TasksRxApiRepoService);

  public manageError(error: HttpErrorResponse) {
    const message = `Error: ${error.error.message} - ${error.status} - ${error.statusText}`;
    this.tasksError.next(message);
    console.log(error);
  }

  load() {
    this.repoRx.getAll().subscribe((tasks) => {
      this.tasks.next(tasks);
    });
  }

  add(data: Pick<Task, 'title' | 'owner'>) {
    const newTask: Omit<Task, 'id'> = {
      isCompleted: false,
      ...data,
    };

    this.repoRx.add(newTask).subscribe({
      next: (newTask) => {
        this.tasks.next([...this.tasks.value, newTask]);
        console.log(this.tasks);
      },
      error: (error: HttpErrorResponse) => {
        this.manageError(error);
      },
    });
  }

  update(task: Task) {
    const { id, ...taskData } = task;

    this.repoRx.update(id, taskData).subscribe({
      next: (updatedTask) => {
        this.tasks.next(
          this.tasks.value.map((n) => (n.id === id ? updatedTask : n)),
        );
        console.log(this.tasks);
      },
      error: (error: HttpErrorResponse) => {
        this.manageError(error);
      },
    });
  }

  delete(task: Task) {
    this.repoRx.delete(task.id).subscribe({
      next: () => {
        this.tasks.next(this.tasks.value.filter((n) => n.id !== task.id));
        console.log(this.tasks);
      },
      error: (error: HttpErrorResponse) => {
        this.manageError(error);
      },
    });
  }
}
