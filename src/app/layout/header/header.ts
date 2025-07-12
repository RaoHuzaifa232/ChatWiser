import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  private readonly router = inject(Router);
  isMenuOpen = false;

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
  navigateToLogin(): void {
    this.router.navigate(['auth/login']);
  }

  navigateToSignUp(): void {
    this.router.navigate(['auth/signup']);
  }
}
