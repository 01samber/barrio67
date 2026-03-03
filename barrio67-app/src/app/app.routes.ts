import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./pages/home/home').then(m => m.HomeComponent) },
  { path: 'reservations', loadComponent: () => import('./pages/reservations/reservations').then(m => m.ReservationsComponent) },
  { path: 'reviews', loadComponent: () => import('./pages/reviews/reviews').then(m => m.ReviewsComponent) },
  { path: 'menu', loadComponent: () => import('./pages/menu/menu').then(m => m.MenuComponent) },
  { path: 'admin/reviews', loadComponent: () => import('./pages/admin-reviews/admin-reviews').then(m => m.AdminReviewsComponent) },
  { path: '**', redirectTo: '' }
];
