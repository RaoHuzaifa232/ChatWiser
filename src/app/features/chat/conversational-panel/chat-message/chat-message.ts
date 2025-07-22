import { Component, Input, inject } from '@angular/core';
import { DarkModeService } from '../../../../services/dark-mode.service';

@Component({
  selector: 'app-chat-message',
  imports: [],
  templateUrl: './chat-message.html',
  styleUrl: './chat-message.scss',
})
export class ChatMessage {
  @Input() message: any;
  private readonly darkModeService = inject(DarkModeService);

  get darkMode() {
    return this.darkModeService.darkMode();
  }
}
