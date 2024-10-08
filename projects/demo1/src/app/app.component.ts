import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuOption } from './types/menu-option';
import { FooterComponent } from './components/footer/footer.component';
import {
  HighLightAltDirective,
  HighLightDirective,
} from './directives/high-light.directive';
import { TruncatePipe } from './pipes/truncate.pipe';
import { environment } from '../environments/environment.development';

@Component({
  selector: 'ind-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MenuComponent,
    HeaderComponent,
    FooterComponent,
    HighLightDirective,
    HighLightAltDirective,
    TruncatePipe,
  ],
  template: `
    <ind-header [appTitle]="title">
      <p [indHighLight]="'pink'">Proyección de contenido</p>

      <ind-menu [options]="menuOptions" />
    </ind-header>

    <p [indHighLightAlt]="'bisque'">{{ text | truncate: 20 }}</p>

    <router-outlet />
    <ind-footer />
  `,
  styles: [],
})
export class AppComponent {
  title = 'Curso de Angular 18 - INDRA';
  menuOptions: MenuOption[] = [
    { label: 'Inicio', path: ['home'] },
    { label: 'Contadores', path: 'counters' },
    { label: 'Notas', path: 'notes' },
    { label: 'Tareas', path: 'tasks' },
    { label: 'Usuarios', path: 'users' },
    { label: 'Acerca de', path: 'about' },
  ];
  text = 'Esto es un texto para probar directivas y pipes';

  urlAPi = environment.urlBase;

  constructor() {
    console.log('URL API:', this.urlAPi);
  }
}
