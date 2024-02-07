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
        path: 'client/:id',
        title: 'Client Details',
        loadComponent: () => import('./dashboard/pages/client-detail/client-detail.component')
      },
      {
        path: 'employees',
        title: 'Employees',
        loadComponent: () => import('./dashboard/pages/employees/employees.component'),
      },
      {
        path: 'employee/:id',
        title: 'Employee Details',
        loadComponent: () => import('./dashboard/pages/employee-detail/employee-detail.component')
      },
      {
        path: 'general-consultation',
        title: 'General Consultation',
        loadComponent: () => import('./dashboard/pages/general-consultation/general-consultation.component'),
      },
      {
        path: 'pets',
        title: 'Pets',
        loadComponent: () => import('./dashboard/pages/pets/pets.component'),
      },
      {
        path: 'pet/:id',
        title: 'Pet detail',
        loadComponent: () => import('./dashboard/pages/pet-detail/pet-detail.component')
      },
      {
        path: 'specie',
        title: 'Specie',
        loadComponent: () => import('./dashboard/pages/specie/specie.component'),
      },
      {
        path: 'consultation-list',
        title: 'Consultation List',
        loadComponent: () => import('./dashboard/pages/list-consultation/list-consultation.component')
      },
      {
        path: 'working-hours',
        title: 'Working Hours',
        loadComponent: () => import('./dashboard/pages/working-hours/working-hours.component')
      },
      {
        path: 'schedule-consultation',
        title: 'Schedule Consultation',
        loadComponent: () => import('./dashboard/pages/schedule-consultation/schedule-consultation.component')
      },
      {
        path: 'manage-consultation',
        title: 'Manage Consultation',
        loadComponent: () => import('./dashboard/pages/manage-consultation/manage-consultation.component')
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
