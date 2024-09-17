import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenuOption } from '../../types/menu-option';
// import { CommonModule } from '@angular/common';

@Component({
  selector: 'ind-menu',
  standalone: true,
  imports: [RouterModule],
  template: `
    <nav>
      <ul>
        <!-- <li *ngFor="let item of options">
          <a [routerLink]="item.path" routerLinkActive="active">{{
            item.label
          }}</a>
        </li> -->
        @for (item of options; track item.label) {
          <li>
            <a [routerLink]="item.path" routerLinkActive="active">{{
              item.label
            }}</a>
          </li>
        }
      </ul>
    </nav>
  `,
  styles: `
    ul {
      list-style: none;
      display: flex;
      gap: 1rem;
    }
    a {
      text-decoration: none;
      color: inherit;
    }
    .active {
      color: blue;
    }
  `,
})
export class MenuComponent {
  @Input({
    required: true,
  })
  options!: MenuOption[];
}

// Directivas estructurales / control flow
// *NgFor - @for
// *NgIf - @if / @elseif / @else
// *NgSwitch / NgCase - @switch / @case
