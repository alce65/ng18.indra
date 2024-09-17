import { Component } from '@angular/core';
import { CounterComponent } from './counter/counter.component';

@Component({
  selector: 'ind-counters',
  standalone: true,
  imports: [CounterComponent],
  template: `
    <p>counters total: {{ total }}</p>
    <ind-counter (countChange)="add($event)" />
    <ind-counter (countChange)="add($event)" />
  `,
  styles: ``,
})
export default class CountersComponent {
  total = 0;

  add(value: number) {
    this.total += value;
  }
}
