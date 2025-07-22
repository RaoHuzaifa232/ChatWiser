import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { DarkModeService } from '../../services/dark-mode.service';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  private readonly router = inject(Router);
  private readonly darkModeService = inject(DarkModeService);
  isMenuOpen = false;

  get darkMode() {
    return this.darkModeService.darkMode();
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
  navigateToLogin(): void {
    this.router.navigate(['auth/login']);
  }

  navigateToSignUp(): void {
    this.router.navigate(['auth/signup']);
  }

  toggleDarkMode(): void {
    this.darkModeService.toggleDarkMode();
  }
}
