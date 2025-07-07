import { Component } from '@angular/core';
// PrimeNG imports
import { Panel } from 'primeng/panel';
import { Button } from 'primeng/button';

@Component({
  selector: 'app-root',
  imports: [Panel, Button],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'ChatWiser';
}
