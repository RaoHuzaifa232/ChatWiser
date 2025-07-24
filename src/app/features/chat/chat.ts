import { Component, inject } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DarkModeService } from '../../services/dark-mode.service';

@Component({
  selector: 'app-chat',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './chat.html',
  styleUrl: './chat.scss',
})
export class Chat {
  private readonly darkModeService = inject(DarkModeService);

  get darkMode() {
    return this.darkModeService.darkMode();
  }

  // message
  onFocus = false;

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
      this.message.setValue('');
    }
  }

  //list
  activeChat: number = 1;

  // Sample chat Contact data
  chats = [
    {
      id: 1,
      name: 'Sarah Johnson',
      avatar:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      lastMessage: 'Can you send me those files?',
      time: '2m ago',
      unread: 3,
      online: true,
    },
    {
      id: 2,
      name: 'Michael Chen',
      avatar:
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      lastMessage: 'Meeting at 3pm confirmed',
      time: '1h ago',
      unread: 0,
      online: true,
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      avatar:
        'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      lastMessage: 'Thanks for your help yesterday!',
      time: '3h ago',
      unread: 0,
      online: false,
    },
    {
      id: 4,
      name: 'Alex Morgan',
      avatar:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      lastMessage: 'Did you see the latest update?',
      time: '1d ago',
      unread: 1,
      online: false,
    },
    {
      id: 5,
      name: 'Taylor Swift',
      avatar:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      lastMessage: "Let me know when you, re, free, ',: time, '2d ago",
      unread: 0,
      online: false,
    },
  ];

  isMobile = false;
  showContactList = true; // Only relevant for mobile

  constructor() {
    this.checkMobile();
    window.addEventListener('resize', this.checkMobile.bind(this));
  }

  checkMobile() {
    this.isMobile = window.innerWidth < 768;
    if (this.isMobile && !this.showContactList && this.activeChat == null) {
      this.showContactList = true;
    }
    if (!this.isMobile) {
      this.showContactList = false;
    }
  }

  setActiveChat(chatId: any) {
    this.activeChat = chatId;
    if (this.isMobile) {
      this.showContactList = false;
    }
  }

  backToContacts() {
    if (this.isMobile) {
      this.showContactList = true;
    }
  }

  //header

  toggleDarkMode() {
    this.darkModeService.toggleDarkMode();
  }

  // panel
  typing = false;

  conversations: Record<number, any[]> = {
    1: [
      {
        id: 1,
        sender: 'Sarah Johnson',
        avatar:
          'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        message: 'Hi there! How are you doing today?',
        time: '10:30 AM',
        isUser: false,
        read: true,
      },
      {
        id: 2,
        sender: 'You',
        avatar:
          'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        message:
          "I'm doing great, thanks for asking! Just finishing up some work.",
        time: '10:32 AM',
        isUser: true,
        read: true,
      },
      {
        id: 3,
        sender: 'Sarah Johnson',
        avatar:
          'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        message:
          "That's good to hear. Do you have time to review the project files I sent you yesterday?",
        time: '10:33 AM',
        isUser: false,
        read: true,
      },
      {
        id: 4,
        sender: 'You',
        avatar:
          'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        message:
          "Yes, I've actually gone through them this morning. They look good overall, but I have a few questions.",
        time: '10:35 AM',
        isUser: true,
        read: true,
      },
      {
        id: 5,
        sender: 'Sarah Johnson',
        avatar:
          'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        message: 'Great! What questions do you have?',
        time: '10:36 AM',
        isUser: false,
        read: true,
      },
      {
        id: 6,
        sender: 'You',
        avatar:
          'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        message:
          'I was wondering about the timeline for the second phase. Also, do we have the budget approved for the additional resources?',
        time: '10:40 AM',
        isUser: true,
        read: false,
      },
      {
        id: 7,
        sender: 'Sarah Johnson',
        avatar:
          'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        message: 'Can you send me those files?',
        time: '10:42 AM',
        isUser: false,
        read: false,
      },
    ],
    2: [
      {
        id: 1,
        sender: 'Michael Chen',
        avatar:
          'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        message: 'Hey, are we still meeting today?',
        time: '9:15 AM',
        isUser: false,
        read: true,
      },
      {
        id: 2,
        sender: 'You',
        avatar:
          'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        message: 'Yes, 3pm works for me. Conference room A, right?',
        time: '9:20 AM',
        isUser: true,
        read: true,
      },
      {
        id: 3,
        sender: 'Michael Chen',
        avatar:
          'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        message: 'Meeting at 3pm confirmed',
        time: '9:22 AM',
        isUser: false,
        read: true,
      },
    ],
  };

  get currentChat() {
    return this.conversations[this.activeChat] || [];
  }
}
