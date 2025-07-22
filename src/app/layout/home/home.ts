import { Component, inject } from '@angular/core';

//Components
import { Footer } from '../footer/footer';
import { Header } from '../header/header';
import { Router } from '@angular/router';
import { DarkModeService } from '../../services/dark-mode.service';

interface Feature {
  name: string;
  description: string;
  icon: string;
}

interface Testimonial {
  content: string;
  author: string;
  role: string;
  image: string;
}

interface Image {
  src: string;
  alt: string;
}

@Component({
  selector: 'app-home',
  imports: [Header, Footer],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  private readonly _router = inject(Router);
  private readonly darkModeService = inject(DarkModeService);
  features: Array<Feature> = [
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

  testimonials: Array<Testimonial> = [
    {
      content:
        "ChatApp has transformed how our team communicates. The interface is intuitive and the real-time sync means we're always on the same page.",
      author: 'Sarah Johnson',
      role: 'Product Manager at TechCorp',
      image:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      content:
        "I've tried many chat apps, but this one stands out for its security features and clean design. It's become essential for both work and personal use.",
      author: 'Michael Chen',
      role: 'Software Developer',
      image:
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      content:
        'The cross-platform functionality is seamless. I can start a conversation on my phone and continue it on my laptop without missing a beat.',
      author: 'Emily Rodriguez',
      role: 'Digital Nomad',
      image:
        'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  ];

  images: Array<Image> = [
    {
      src: 'https://images.unsplash.com/photo-1600267204091-5c1ab8b10c02?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      alt: 'Mobile app interface showing chat conversations',
    },
    {
      src: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      alt: 'Person using the chat app on a laptop',
    },
    {
      src: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      alt: 'Group of friends using the chat app together',
    },
    {
      src: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      alt: 'Desktop interface of the chat application',
    },
  ];

  get darkMode() {
    return this.darkModeService.darkMode();
  }

  navigateToSignup(): void {
    this._router.navigate(['/auth/signup']);
  }
}
