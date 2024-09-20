import { Component } from '@angular/core';
import { RegisterRxComponent } from './register-rx/register-rx.component';

@Component({
  selector: 'ind-users',
  standalone: true,
  imports: [RegisterRxComponent],
  template: ` <h2>Usuarios</h2>
    <ind-register-rx />`,
  styles: ``,
})
export default class UsersComponent {}
