import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'ind-greetings-local',
  standalone: true,
  imports: [FormsModule],
  template: `
    <h2>Referencias locales</h2>
    <p>Hola {{ user.value ? user.value : 'amigo' }}</p>
    <input placeholder="Dime tu nombre" #user />
    <button (click)="user.value = ''">Borrar</button>
    <button (click)="user.value = user.value">Refrescar</button>
  `,
  styles: ``,
})
export class GreetingsLocalComponent {}
