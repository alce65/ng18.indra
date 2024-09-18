import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'ind-greetings',
  standalone: true,
  imports: [FormsModule],
  template: `
    <h2>Saludo - binding modelo <-> template</h2>
    <p>Hola {{ user ? user : 'amigo' }}</p>
    @if (!user; as hasUser) {
      <p>Animate a escribir tu nombre:</p>
    } @else {
      <p>Gracias por compartir tu nombre</p>
    }
    <input [placeholder]="placeholder" [(ngModel)]="user" />
    <button (click)="onClick($event)">Borrar</button>
  `,
  styles: ``,
})
export class GreetingsComponent {
  user = '';
  placeholder = 'Dime tu nombre';

  onClick(event: MouseEvent) {
    this.user = '';
    console.log(event);
  }
}
