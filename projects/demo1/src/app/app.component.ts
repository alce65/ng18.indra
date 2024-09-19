import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuOption } from './types/menu-option';
import { FooterComponent } from './components/footer/footer.component';
import { HighLightDirective } from './directives/high-light.directive';

@Component({
  selector: 'ind-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MenuComponent,
    HeaderComponent,
    FooterComponent,
    HighLightDirective,
  ],
  template: `
    <ind-header [appTitle]="title">
      <p [indHighLight]="'pink'">Proyección de contenido</p>
      <ind-menu [options]="menuOptions" />
    </ind-header>

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
    { label: 'Acerca de', path: 'about' },
  ];
}
