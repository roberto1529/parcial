import { Routes } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
import { DetallesComponent } from './detalles/detalles.component';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'principal',
    component: PrincipalComponent,
  },
  {
    path: 'detalles/:id',
    component: DetallesComponent,
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
