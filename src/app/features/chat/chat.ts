import { Component } from '@angular/core';
import { ContactList } from "./contact-list/contact-list";

@Component({
  selector: 'app-chat',
  imports: [ContactList],
  templateUrl: './chat.html',
  styleUrl: './chat.scss'
})
export class Chat {

}
