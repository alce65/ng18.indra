import { Component, inject } from '@angular/core';
import { SampleService } from '../../../../services/sample.service';

@Component({
  selector: 'ind-sample',
  standalone: true,
  imports: [],
  template: `<h2>{{ title }}</h2>
    <img [src]="image.url" [alt]="image.alt" />
    <button (click)="changeTitle()">Change Title</button>`,
  styles: `
    :host {
      display: block;
      border: 1px solid grey;
    }
  `,
})
export class SampleComponent {
  title = 'Sample';
  image = {
    url: 'https://angular.io/assets/images/logos/angular/angular.png',
    alt: 'Angular Logo',
  };

  private sample = inject(SampleService);

  //s: SampleService;
  constructor() {
    console.log(this.sample.getValue());
    //this.s = s
  }

  changeTitle() {
    this.title = 'Angular ' + this.title;
  }
}
