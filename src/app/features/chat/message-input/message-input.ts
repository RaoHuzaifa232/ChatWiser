import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-message-input',
  imports: [ReactiveFormsModule],
  templateUrl: './message-input.html',
  styleUrl: './message-input.scss',
})
export class MessageInput {
  @Input() darkMode: boolean = false;
  @Output() onSend = new EventEmitter<string>();
  @Output() onFocus = new EventEmitter<boolean>(false);

  showEmojiPicker = false;
  message = new FormControl('');

  emojis = ['😊', '😂', '😍', '👍', '🎉', '❤️', '🔥', '😎'];

  addEmoji(emoji: string) {
    const currentMessage = this.message.value || '';
    this.message.setValue(currentMessage + emoji);
    this.showEmojiPicker = false;
  }

  toggleEmojiPicker() {
    this.showEmojiPicker = !this.showEmojiPicker;
  }

  handleSubmit() {
    const text = this.message.value?.trim();
    if (text) {
      this.onSend.emit(text);
      this.message.setValue('');
    }
  }
}
