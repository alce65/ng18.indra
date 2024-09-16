import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SampleComponent } from './compenents/sample/sample.component';

@Component({
  selector: 'ind-root',
  standalone: true,
  imports: [RouterOutlet, SampleComponent],
  template: `
    <h1>{{ title }}!</h1>
    <ind-sample />
    <router-outlet />
  `,
  styles: ['h1 { font-family: Lato; color: blue; }'],
})
export class AppComponent {
  title = 'Curso de Angular 18 - INDRA';
}
