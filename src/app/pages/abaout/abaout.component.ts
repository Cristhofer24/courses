import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FooterComponent } from "../../Components/footer/footer.component";
import { ChatbotComponent } from "../../Components/chatbot/chatbot.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-abaout',
  standalone: true,
  imports: [NgFor, FooterComponent, ChatbotComponent],
  templateUrl: './abaout.component.html',
  styleUrl: './abaout.component.css'
})
export class AbaoutComponent {

  constructor(private router: Router ) {}
  
    navigate () {
      this.router.navigate(['/login']);
    }

  
  // Lista de imágenes para el carrusel
  img = [
    { src: 'https://blog.desafiolatam.com/wp-content/uploads/2023/02/blog-educacionit-4.jpg', alt: 'Imagen 1'},
    { src: 'https://miro.medium.com/v2/resize:fit:1000/1*pWrVoCgQClbpm8YTTNeUvw.jpeg', alt: 'Imagen 2' },
    { src: 'https://www.nemotech.co.za/wp-content/uploads/pexels-maria-buloczka-10562464-1200x800.jpg', alt: 'Imagen 3' },
    { src: 'https://live.staticflickr.com/3245/3112764608_40527d385d_b.jpg', alt: 'Imagen 4' },
    { src: 'https://www.profesionalreview.com/wp-content/uploads/2021/09/intel-fabrica-procesadores-arizona.jpg',alt: 'Imagen 5' },
  ];

  currentIndex = 0;

  // Ir al slide específico
  goToSlide(index: number) {
    this.currentIndex = index;
  }

  // Función para ir al slide anterior
  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.img.length) % this.img.length;
  }

  // Función para ir al siguiente slide
  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.img.length;
  }
}
