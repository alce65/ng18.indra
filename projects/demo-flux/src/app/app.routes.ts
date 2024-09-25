import { Routes } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
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
  {
    path: 'notes',
    title: 'Demo Angular - Notas',
    loadComponent: () => import('./features/notes/notes.component'),
  },
  {
    path: 'tasks',
    title: 'Demo Angular - Tareas',
    loadComponent: () => import('./features/todo/tasks.component'),
  },

  { path: '**', component: NotFoundComponent },
];
