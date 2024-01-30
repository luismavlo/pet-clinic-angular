import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () => import('./dashboard/dashboard.component'),
    children: [
      {
        path: 'clients',
        title: 'Clients',
        loadComponent: () => import('./dashboard/pages/clients/clients.component'),
      },
      {
        path: 'employees',
        title: 'Employees',
        loadComponent: () => import('./dashboard/pages/employees/employees.component'),
      },
      {
        path: 'general consultation',
        title: 'General Consultation',
        loadComponent: () => import('./dashboard/pages/general-consultation/general-consultation.component'),
      },
      {
        path: 'pets',
        title: 'Pets',
        loadComponent: () => import('./dashboard/pages/pets/pets.component'),
      },
      {
        path: 'specie',
        title: 'Specie',
        loadComponent: () => import('./dashboard/pages/specie/specie.component'),
      },
      {
        path: '', 
        redirectTo: 'clients', 
        pathMatch: 'full'
      }
    ]
  },
  {
    path: 'login',
    title: 'Login',
    loadComponent: () => import('./auth/login/login.component'),
  },
  {
    path: 'register',
    title: 'Register',
    loadComponent: () => import('./auth/register/register.component'),
  },
  {
    path: 'home',
    title: 'Home',
    loadComponent: () => import('./landing/home/home.component'),
  },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  }
];
