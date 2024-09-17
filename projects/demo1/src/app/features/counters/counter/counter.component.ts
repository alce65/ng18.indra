import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'ind-counter',
  standalone: true,
  imports: [],
  template: `
    <button (click)="onChange(-1)">➖</button>
    <p>{{ value }}</p>
    <button (click)="onChange(1)">➕</button>
  `,
  styles: `
    :host {
      display: flex;
      border: 1px solid #ccc;
      padding: 1rem;
      margin: 1rem 0;
      gap: 1rem;
    }
  `,
})
export class CounterComponent {

  @Output() countChange = new EventEmitter<number>();
  value = 0;

  onChange(change: number) {
    this.value += change;
    this.countChange.emit(change);
  }
}
