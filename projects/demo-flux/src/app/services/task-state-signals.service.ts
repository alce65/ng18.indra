import { computed, inject, Injectable, signal } from '@angular/core';
import { Task } from '../entities/task';
import { TasksRxApiRepoService } from '../features/todo/services/tasks-rx-api-repo.service';

@Injectable({
  providedIn: 'root',
})
export class TaskStateSignalsService {
  private _tasks = signal<Task[]>([]);
  public tasks = computed(this._tasks);

  private repoRx = inject(TasksRxApiRepoService);
  load() {
    this.repoRx.getAll().subscribe((tasks) => {
      this._tasks.set(tasks);
    });
  }

  add(data: Pick<Task, 'title' | 'owner'>) {
    const newTask: Omit<Task, 'id'> = {
      isCompleted: false,
      ...data,
    };

    this.repoRx.add(newTask).subscribe((newTask) => {
      this._tasks.set([...this._tasks(), newTask]);
      console.log(this.tasks);
    });
  }

  update(task: Task) {
    const { id, ...taskData } = task;

    this.repoRx.update(id, taskData).subscribe((updatedTask) => {
      this._tasks.set(
        this._tasks().map((n) => (n.id === id ? updatedTask : n)),
      );
      console.log(this.tasks);
    });
  }

  delete(task: Task) {
    this.repoRx.delete(task.id).subscribe(() => {
      this._tasks.set(this._tasks().filter((n) => n.id !== task.id));
      console.log(this.tasks);
    });
  }
}
