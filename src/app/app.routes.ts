import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home'),
  },
  {
    path: 'stock',
    loadComponent: () =>
      import('./pages/stock/stock').then((c) => c.StockComponent),
  },
  {
    path: 'users',
    loadComponent: () => import('./pages/users/users.component'),
  },
  {
    path: 'reactive',
    loadComponent: () => import('./pages/reactive-forms/reactive-forms'),
  },
  {
    path: 'reactive-stock',
    loadComponent: () =>
      import('./pages/reactive-stock/reactive-stock.component'),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
