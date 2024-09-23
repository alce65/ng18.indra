import { CommonModule, JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'ind-register-rx',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, JsonPipe],
  template: `
    <h3>Register-rx</h3>
    <p>Formulario reactivo o model-driven</p>
    <form [formGroup]="registerForm" (ngSubmit)="register()">
      <ng-container>
        <div class="form-group">
          <label>
            <span>Name:</span>
            <input type="text" formControlName="name" />
          </label>
        </div>
        @if (
          registerForm.controls.name.invalid &&
          registerForm.controls.name.touched
        ) {
          <p class="error">El nombre es obligatorio</p>
        }
      </ng-container>

      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" formControlName="email" />
      </div>

      @let emailControl = registerForm.controls.email;

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
        <input type="password" id="password" formControlName="password" />
      </div>
      <div class="form-group">
        <label>
          <input type="checkbox" formControlName="confirm" />
          <span>Estoy de acuerdo con....:</span>
        </label>
      </div>
      @if (registerForm.controls.confirm.invalid) {
        <p class="error">El acuerdo es obligatorio</p>
      }
      <fieldset class="form-group">
        <legend>Turno</legend>
        @for (turno of turnos; track turno.value) {
          <label>
            <input
              type="radio"
              name="turn"
              [value]="turno"
              formControlName="turn"
            />
            <span>{{ turno.label }}</span>
          </label>
        }
      </fieldset>
      <div class="form-group">
        <label>
          <span>Curso:</span>
          <select formControlName="course">
            @for (curso of cursos; track curso.value) {
              <option [ngValue]="curso">{{ curso.label }}</option>
            }
          </select>
        </label>
      </div>
      <button type="submit" [disabled]="registerForm.invalid">Register</button>
    </form>
    <p>Form value:</p>
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
    .form-group {
      padding: 0.5rem 0;
    }
    .error {
      color: red;
      font-size: 0.8rem;
    }
    .ng-invalid.ng-touched {
      border-color: red;
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

  private fb = inject(FormBuilder);
  // registerForm = new FormGroup({
  //   name: new FormControl('', Validators.required),
  //   email: new FormControl('', [Validators.required, Validators.email]),
  //   password: new FormControl('', Validators.required),
  //   confirm: new FormControl(false),
  //   turn: new FormControl('morning'),
  //   course: new FormControl('angular'),
  // });

  registerForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: [''],
    confirm: [false, Validators.requiredTrue],
    turn: [''],
    course: [''],
  });

  register() {
    console.log('Enviando...', this.registerForm);
  }
}
