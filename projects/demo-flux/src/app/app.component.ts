import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuOption } from './types/menu-option';
import { FooterComponent } from './components/footer/footer.component';
import { TaskStateService } from './services/task-state.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'ind-root',
  standalone: true,
  imports: [
    RouterOutlet,
    AsyncPipe,
    MenuComponent,
    HeaderComponent,
    FooterComponent,
  ],
  template: `
    <ind-header [appTitle]="title">
      <ind-menu [options]="menuOptions" />
    </ind-header>
    @if (tasksError$ | async; as error) {
      <p class="error">{{ error }}</p>
    }

    <router-outlet />
    <ind-footer />
  `,
  styles: [],
})
export class AppComponent {
  protected tasksError$ = inject(TaskStateService).tasksError$;

  title = 'Curso de Angular 18 - Flux - INDRA';
  menuOptions: MenuOption[] = [
    { label: 'Inicio', path: ['home'] },
    { label: 'Tareas', path: 'tasks' },
    { label: 'Contadores', path: 'counters' },
    { label: 'Notas', path: 'notes' },
  ];
  text = 'Esto es un texto para probar directivas y pipes';
}
