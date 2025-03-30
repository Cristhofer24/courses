import { Component } from '@angular/core';
import { ChatbotComponent } from '../../Components/chatbot/chatbot.component';
import { Router } from '@angular/router';
import { FooterComponent } from "../../Components/footer/footer.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ChatbotComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private router: Router ) {}

  navigate () {
    this.router.navigate(['/login']);
  }

}
