import { Routes } from '@angular/router';
import { Home } from './layout/home/home';

export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./features/auth/auth.routes').then((m) => m.authRoutes),
  },
   {
    path: 'chat',
    loadChildren: () =>
      import('./features/chat/chat.routes').then((c) => c.chatRoutes),
  },
  { path: 'home', component: Home },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];
