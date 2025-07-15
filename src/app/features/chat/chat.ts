import { Component } from '@angular/core';
import { ChatHeader } from './chat-header/chat-header';
import { ContactList } from './contact-list/contact-list';
import { ConversationalPanel } from './conversational-panel/conversational-panel';
import { MessageInput } from './message-input/message-input';

@Component({
  selector: 'app-chat',
  imports: [ContactList, ChatHeader, MessageInput, ConversationalPanel],
  templateUrl: './chat.html',
  styleUrl: './chat.scss',
})
export class Chat {
  darkMode = false;
  checkTyping = false;
  toggleDarkMode(event: boolean): void {
    this.darkMode = event;
  }

  typing(event: boolean): void {
    this.checkTyping = event;
  }
}
