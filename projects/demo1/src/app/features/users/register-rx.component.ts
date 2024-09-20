import { Component } from '@angular/core';

@Component({
  selector: 'ind-register-rx',
  standalone: true,
  imports: [],
  template: `
    <h3>Register-rx</h3>
    <form>
      <div class="form-group">
        <label>
          <span>Name:</span>
          <input type="text" name="name" />
        </label>
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required />
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required />
      </div>
      <div class="form-group">
        <label>
          <input type="checkbox" name="confirm" />
          <span>Estoy de acuerdo con....:</span>
        </label>
      </div>
      <fieldset class="form-group">
        <legend>Turno</legend>
        @for (turno of turnos; track turno.value) {
          <label>
            <input type="radio" name="turn" value="{{ turno.value }}" />
            <span>{{ turno.label }}</span>
          </label>
        }
      </fieldset>
      <div class="form-group">
        <label>
          <span>Curso:</span>
          <select name="course">
            @for (curso of cursos; track curso.value) {
              <option [value]="curso.value">{{ curso.label }}</option>
            }
          </select>
        </label>
      </div>
      <button type="submit">Register</button>
    </form>
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
export class RegisterRxComponent {
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
}
