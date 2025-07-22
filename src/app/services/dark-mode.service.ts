import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class DarkModeService {
  private readonly _darkMode = signal<boolean>(false);

  readonly darkMode = this._darkMode.asReadonly();

  toggleDarkMode(): void {
    this._darkMode.update((v) => !v);
  }

  setDarkMode(value: boolean): void {
    this._darkMode.set(value);
  }
} 