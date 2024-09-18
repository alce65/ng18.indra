import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuOption } from './types/menu-option';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'ind-root',
  standalone: true,
  imports: [RouterOutlet, MenuComponent, HeaderComponent, FooterComponent],
  template: `
    <ind-header [appTitle]="title">
      <p>Proyección de contenido</p>
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
    { label: 'Acerca de', path: 'about' },
  ];
}
