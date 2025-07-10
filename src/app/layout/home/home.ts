import { Component } from '@angular/core';

//Components
import { Header } from '../header/header';
import { Footer } from '../footer/footer';

// PrimeNG imports
import { Button } from 'primeng/button';

@Component({
  selector: 'app-home',
  imports: [Header, Footer, Button],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  features = [
    {
      name: 'Secure Messaging',
      description:
        'End-to-end encryption ensures your conversations remain private and secure at all times.',
      icon: 'pi pi-lock',
    },
    {
      name: 'Real-time Sync',
      description:
        "Messages sync instantly across all your devices, so you're always up to date.",
      icon: 'pi pi-bolt',
    },
    {
      name: 'Cross-platform',
      description:
        'Available on web, iOS, and Android - chat from anywhere, anytime.',
      icon: 'pi pi-box',
    },
    {
      name: 'Global Reach',
      description:
        'Connect with people around the world with automatic translation features.',
      icon: 'pi pi-globe',
    },
  ];
}
