import { Routes } from '@angular/router';
import { ContactList } from './contact-list/contact-list';

export const chatRoutes: Routes = [
  {
    path: 'contact-list',
    component: ContactList,
  },
];
