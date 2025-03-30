import { Component } from '@angular/core';
import { ChatbotComponent } from '../../Components/chatbot/chatbot.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ChatbotComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private router: Router ) {}

  navigate () {
    this.router.navigate(['/login']);
  }

}
