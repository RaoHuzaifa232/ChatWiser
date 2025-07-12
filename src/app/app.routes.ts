import { Routes } from '@angular/router';
import { Home } from './layout/home/home';
import { Chat } from './features/chat/chat';

export const routes: Routes = [
    {
        path: 'chat',
        component: Chat,
    },
    {
        path: '',
        component: Home,
    },
];
