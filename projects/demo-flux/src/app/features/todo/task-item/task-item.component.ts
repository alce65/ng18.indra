import { Component, inject, Input, OnInit } from '@angular/core';
import { Task } from '../../../entities/task';
import { FormsModule } from '@angular/forms';
import { TaskStateService } from '../../../services/task-state.service';

@Component({
  selector: 'ind-task-item',
  standalone: true,
  imports: [FormsModule],
  template: `
    <input
      type="checkbox"
      [(ngModel)]="item.isCompleted"
      (change)="sendChange()"
    />
    <p [title]="item.id">{{ item.title }}</p>
    <p>{{ item.owner }}</p>
    <button (click)="sendDelete()">🗑️</button>
  `,
  styles: `
    :host {
      display: flex;
      gap: 1rem;
      padding: 1rem;
      border: 1px solid #ccc;
      margin: 1rem 0;
    }
    button {
      background: none;
      border: none;
      cursor: pointer;
    }
  `,
})
export class TaskItemComponent implements OnInit {
  @Input({ required: true }) item!: Task;
  private taskService = inject(TaskStateService);
  // @Output() deleteEvent = new EventEmitter<Task>();
  // @Output() changeEvent = new EventEmitter<Task>();

  ngOnInit(): void {
    this.item = { ...this.item };
  }

  sendDelete() {
    // this.deleteEvent.emit(this.item);
    this.taskService.delete(this.item);
  }

  sendChange() {
    // this.changeEvent.emit(this.item);
    const data = this.item;
    // this.item.isCompleted = !this.item.isCompleted;
    this.taskService.update(data);
  }
}
