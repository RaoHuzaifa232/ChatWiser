import { Component, inject } from '@angular/core';
import { ChatHeader } from './chat-header/chat-header';
import { ContactList } from './contact-list/contact-list';
import { ConversationalPanel } from './conversational-panel/conversational-panel';
import { MessageInput } from './message-input/message-input';
import { DarkModeService } from '../../services/dark-mode.service';

@Component({
  selector: 'app-chat',
  imports: [ContactList, ChatHeader, MessageInput, ConversationalPanel],
  templateUrl: './chat.html',
  styleUrl: './chat.scss',
})
export class Chat {
  private readonly darkModeService = inject(DarkModeService);
  checkTyping = false;

  get darkMode() {
    return this.darkModeService.darkMode();
  }

  typing(event: boolean): void {
    this.checkTyping = event;
  }
}
