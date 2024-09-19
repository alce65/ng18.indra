import { Routes } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  // { path: 'home', component: HomeComponent },
  {
    path: 'home',
    title: 'Demo Angular - Inicio',
    loadComponent: () => import('./features/home/home.component'),
  },
  {
    path: 'counters',
    title: 'Demo Angular - Contadores',
    loadComponent: () => import('./features/counters/counters.component'),
  },
  // { path: 'about', component: AboutComponent },
  {
    path: 'notes',
    title: 'Demo Angular - Notas',
    loadComponent: () => import('./features/notes/notes.component'),
  },
  {
    path: 'about',
    title: 'Demo Angular - About',
    loadComponent: () => import('./features/about/about.component'),
  },
  { path: '**', component: NotFoundComponent },
];
