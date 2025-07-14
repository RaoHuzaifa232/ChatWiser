import { Routes } from '@angular/router';
import { Home } from './layout/home/home';
import { Chat } from './features/chat/chat';

export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./features/auth/auth.routes').then((m) => m.authRoutes),
  },
  { path: 'chat', component: Chat },
  { path: 'home', component: Home },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];
