import { Component } from '@angular/core';
import { LifeCycleComponent } from './life-cycle/life-cycle.component';

@Component({
  selector: 'ind-about',
  standalone: true,
  imports: [LifeCycleComponent],
  template: `
    <h2>About</h2>
    <ind-life-cycle />
  `,
  styles: ``,
})
export default class AboutComponent {}
