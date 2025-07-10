import { Component } from '@angular/core';
import { Home } from './layout/home/home';

@Component({
  selector: 'app-root',
  imports: [Home],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'ChatWiser';
}
