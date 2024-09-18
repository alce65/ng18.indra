// import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'ind-counter',
  standalone: true,
  imports: [],
  template: `
    <button (click)="onChange(-1)">➖</button>
    <!-- <p [style.color]="value < 0 ? 'red' : ''">{{ value }}</p> -->
    <p [class]="value < 0 ? 'negative' : ''">{{ value }}</p>
    <p [class.red]="value < 0" [class.big]="value >= 0">{{ value }}</p>
    <!-- <p [ngClass]="{ red: value < 0 }">{{ value }}</p> -->
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
    .red {
      color: red;
    }
    .negative {
      color: maroon;
    }
    .big {
      font-size: 2rem;
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
