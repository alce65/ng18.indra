import { Component, Input } from '@angular/core';

@Component({
  selector: 'ind-header',
  standalone: true,
  imports: [],
  template: `
    <header>
      <h1>{{ appTitle }}</h1>
      <ng-content select="ind-menu"></ng-content>
    </header>
    <ng-content select="p"></ng-content>
  `,
  styles: ['h1 { font-family: Lato; color: blue; }'],
})
export class HeaderComponent {
  @Input({
    required: true,
  })
  appTitle!: string;
}
