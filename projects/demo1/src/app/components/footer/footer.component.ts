import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'ind-footer',
  standalone: true,
  imports: [DatePipe],
  template: `
    <address>
      INDRA
      <p>
        {{ toDay | date: 'fullDate' }}
      </p>
    </address>
  `,
  styles: ``,
})
export class FooterComponent {
  toDay = new Date();
}
