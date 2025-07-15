import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-contact-list',
  imports: [],
  templateUrl: './contact-list.html',
  styleUrl: './contact-list.scss',
})
export class ContactList {
  @Input() activeChat: any;
  @Input() darkMode = false;

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

  setActiveChat(chatId: any) {
    this.activeChat = chatId;
  }
}
