import { Component } from '@angular/core';
import { ChatHeader } from './chat-header/chat-header';
import { ChatMessage } from './chat-message/chat-message';
import { ContactList } from './contact-list/contact-list';
import { MessageInput } from './message-input/message-input';

@Component({
  selector: 'app-chat',
  imports: [ContactList, ChatHeader, ChatMessage, MessageInput],
  templateUrl: './chat.html',
  styleUrl: './chat.scss',
})
export class Chat {
  darkMode: boolean = false;
  toggleDarkMode(event: boolean) {
    this.darkMode = event;
  }
}
