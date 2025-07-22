import { Component, EventEmitter, Output, inject } from '@angular/core';
import { DarkModeService } from '../../../services/dark-mode.service';

@Component({
  selector: 'app-chat-header',
  imports: [],
  templateUrl: './chat-header.html',
  styleUrl: './chat-header.scss'
})
export class ChatHeader {
  private readonly darkModeService = inject(DarkModeService);

  get darkMode() {
    return this.darkModeService.darkMode();
  }

  toggleDarkMode() {
    this.darkModeService.toggleDarkMode();
  }
}
