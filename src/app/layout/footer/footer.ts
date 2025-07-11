import { Component } from '@angular/core';

export interface NavigationItem {
  name: string;
  href: string;
  icon?: string;
}

export interface FooterNavigation {
  product: NavigationItem[];
  company: NavigationItem[];
  legal: NavigationItem[];
  support: NavigationItem[];
  social: NavigationItem[];
}
@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  footerNavigation: FooterNavigation = {
    product: [
      {
        name: 'Features',
        href: '#',
      },
      {
        name: 'Pricing',
        href: '#',
      },
      {
        name: 'Security',
        href: '#',
      },
      {
        name: 'FAQ',
        href: '#',
      },
    ],
    company: [
      {
        name: 'About',
        href: '#',
      },
      {
        name: 'Blog',
        href: '#',
      },
      {
        name: 'Jobs',
        href: '#',
      },
      {
        name: 'Press',
        href: '#',
      },
    ],
    legal: [
      {
        name: 'Privacy',
        href: '#',
      },
      {
        name: 'Terms',
        href: '#',
      },
      {
        name: 'Cookie Policy',
        href: '#',
      },
    ],
    support: [
      {
        name: 'Contact',
        href: '#',
      },
      {
        name: 'Documentation',
        href: '#',
      },
      {
        name: 'Help Center',
        href: '#',
      },
      {
        name: 'Status',
        href: '#',
      },
    ],
    social: [
      {
        name: 'Facebook',
        href: '#',
        icon: 'pi pi-facebook',
      },
      {
        name: 'Twitter',
        href: '#',
        icon: 'pi pi-twitter',
      },
      {
        name: 'Instagram',
        href: '#',
        icon: 'pi pi-instagram',
      },
      {
        name: 'LinkedIn',
        href: '#',
        icon: 'pi pi-linkedin',
      },
    ],
  };
}
