import { Component } from '@angular/core';
import { SampleComponent } from './components/sample/sample.component';
import { GreetingsComponent } from './components/greetings/greetings.component';
import { GreetingsLocalComponent } from './components/greetings-local/greetings-local.component';

@Component({
  selector: 'ind-home',
  standalone: true,
  imports: [SampleComponent, GreetingsComponent, GreetingsLocalComponent],
  template: `
    <p>home works!</p>
    <ind-sample />
    <ind-greetings />
    <ind-greetings-local />
  `,
  styles: ``,
})
export default class HomeComponent {}
