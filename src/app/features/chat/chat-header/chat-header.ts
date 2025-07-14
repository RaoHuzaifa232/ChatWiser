import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-chat-header',
  imports: [],
  templateUrl: './chat-header.html',
  styleUrl: './chat-header.scss'
})
export class ChatHeader {
  @Output() darkModeChange = new EventEmitter<boolean>(false);
  darkMode: boolean = false;

  toggleDarkMode() {
    this.darkMode = !this.darkMode;
    this.darkModeChange.emit(this.darkMode);
  }
}
