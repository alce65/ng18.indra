import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from '../../../entities/task';
import { FormsModule } from '@angular/forms';

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
  @Output() deleteEvent = new EventEmitter<Task>();
  @Output() changeEvent = new EventEmitter<Task>();

  ngOnInit(): void {
    this.item = { ...this.item };
  }

  sendDelete() {
    console.log('delete', this.item.id);
    this.deleteEvent.emit(this.item);
  }

  sendChange() {
    console.log('change', this.item);
    this.changeEvent.emit(this.item);
  }
}
