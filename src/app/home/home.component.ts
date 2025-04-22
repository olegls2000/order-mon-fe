import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  homeMessage = signal('From TS Component')

   keyUpHandler(event: KeyboardEvent) {
    console.log(`user typed ${event.key}`)
  }
}
