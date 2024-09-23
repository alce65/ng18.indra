import { Component } from '@angular/core';
import { RegisterRxComponent } from './register-rx/register-rx.component';
import { RegisterTdComponent } from './register-td/register-td.component';

@Component({
  selector: 'ind-users',
  standalone: true,
  imports: [RegisterRxComponent, RegisterTdComponent],
  template: ` <h2>Usuarios</h2>
    <ind-register-rx />
    <ind-register-td />`,
  styles: ``,
})
export default class UsersComponent {}
