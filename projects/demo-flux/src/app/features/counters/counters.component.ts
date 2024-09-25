import { Component, signal } from '@angular/core';
import { CounterComponent } from './counter/counter.component';

@Component({
  selector: 'ind-counters',
  standalone: true,
  imports: [CounterComponent],
  template: `
    <p>counters total: {{ total() }}</p>
    <ind-counter (countChange)="add($event)" />
    <ind-counter (countChange)="add($event)" />
  `,
  styles: ``,
})
export default class CountersComponent {
  total = signal(0);

  add(value: number) {
    this.total.update((previous) => previous + value);
  }
}
