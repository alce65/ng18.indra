import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'ind-register-td',
  standalone: true,
  imports: [FormsModule, JsonPipe],
  template: `
    <h3>Register template driven</h3>
    <form #registerForm="ngForm" (ngSubmit)="register(registerForm.value)">
      <div class="form-group">
        <label>
          <span>Name:</span>
          <input type="text" name="name" ngModel required />
        </label>
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          ngModel
          required
          email
          #emailControl="ngModel"
        />
      </div>

      @if (emailControl.invalid && emailControl.touched) {
        <!-- @if (registerForm.controls.email.errors?.["required"]) { -->
        @if (emailControl.hasError('required')) {
          <p class="error">El correo es obligatorio</p>
        } @else {
          <p class="error">El formato del correo no es correcto</p>
        }
      }
      <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" ngModel />
      </div>
      <div class="form-group">
        <label>
          <input type="checkbox" name="confirm" ngModel />
          <span>Estoy de acuerdo con....:</span>
        </label>
      </div>
      <fieldset class="form-group">
        <legend>Turno</legend>
        @for (turno of turnos; track turno.value) {
          <label>
            <input type="radio" name="turn" value="{{ turno.value }}" ngModel />
            <span>{{ turno.label }}</span>
          </label>
        }
      </fieldset>
      <div class="form-group">
        <label>
          <span>Curso:</span>
          <select name="course" ngModel>
            @for (curso of cursos; track curso.value) {
              <option [value]="curso.value">{{ curso.label }}</option>
            }
          </select>
        </label>
      </div>
      <button type="submit" [disabled]="registerForm.invalid">Register</button>
    </form>
    <pre>{{ registerForm.value | json }}</pre>
  `,
  styles: `
    :host {
      display: block;
      padding: 1rem;
      border: 1px solid #ccc;
      border-radius: 0.5rem;
      margin: 1rem 0;
    }
  `,
})
export class RegisterTdComponent {
  turnos = [
    { value: 'morning', label: 'Mañana' },
    { value: 'afternoon', label: 'Tarde' },
    { value: 'night', label: 'Noche' },
  ];
  cursos = [
    { value: 'angular', label: 'Angular 18' },
    { value: 'react', label: 'React 19' },
    { value: 'vue', label: 'Vue 18' },
  ];

  register(data: Record<'string', unknown>) {
    console.log('Enviando', data);
  }
}
