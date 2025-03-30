import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chatbot',
  standalone: true,
  templateUrl: './chatbot.component.html',
  styleUrl: './chatbot.component.css',
  imports: [CommonModule, FormsModule]
})
export class ChatbotComponent {

  messages: { sender: string, text: string }[] = [];
  userInput: string = '';

  responses: { [key: string]: string } = {
    "hola": "¡Hola, Capsule Corp. te da la bienvenida! ¿Cómo puedo ayudarte?, estoy aqui para ayudarte con tus preguntas sobre descuentos y cursos.",
    "¿cómo estás?": "Soy un bot, pero estoy bien. ¿Y tú?",
    "nesesito informacion":"Este mes contamos con descuentos de verano analiza nuestros paquetes y elige el que mas te guste.",
    "dame informacion":"Este mes contamos con descuentos de verano analiza nuestros paquetes y elige el que mas te guste.",
    "informacion":"Este mes contamos con descuentos de verano analiza nuestros paquetes y elige el que mas te guste.",
    "información":"Este mes contamos con descuentos de verano analiza nuestros paquetes y elige el que mas te guste.",
    "descuentos":"Depende de tus nesesidades tenemos descuentos desde el 10% al 30% de descuento.",
    "hablame de descuentos":"Depende de tus nesesidades tenemos descuentos desde el 10% al 30% de descuento.",
    "nesesito descuentos":"Depende de tus nesesidades tenemos descuentos desde el 10% al 30% de descuento.",
    "quiero un descuento":"Depende de tus nesesidades tenemos descuentos desde el 10% al 30% de descuento.",
    "te quiero":" callate insecto, se que soy iresistible pero esta es una plataforma educativa,  recomiendo que te registres",
    "Que es el hardware":" El harware es todo componente fisico de una computadora en nuestro curso aprenderas su estructura y funcionamiento asi como micro elecrtonica y circuitos electricos",
    "me interesa el hardware":"El harware es todo componente fisico de una computadora en nuestro curso aprenderas su estructura y funcionamiento asi como micro elecrtonica y circuitos electricos",
    "quiero el curso de hardware":"El harware es todo componente fisico de una computadora en nuestro curso aprenderas su estructura y funcionamiento asi como micro elecrtonica y circuitos electricos",
    "quiero el del hardware":"El harware es todo componente fisico de una computadora en nuestro curso aprenderas su estructura y funcionamiento asi como micro elecrtonica y circuitos electricos",
    "harware":"El hardware es todo componente fisico de una computadora en nuestro curso aprenderas su estructura y funcionamiento asi como micro elecrtonica y circuitos electricos",
    "¿que es el hardware?":"El harware es todo componente fisico de una computadora en nuestro curso aprenderas su estructura y funcionamiento asi como micro elecrtonica y circuitos electricos",
    "que es el hardware?":"El harware es todo componente fisico de una computadora en nuestro curso aprenderas su estructura y funcionamiento asi como micro elecrtonica y circuitos electricos",
    "quiero el curso de software":" el software  es el sistema operativo de una computadora  en nuestro curso aprenderas su estructura y funcionamiento asi como sus diferentes lenguajes y frameworks",
    "quiero el del software":" el software  es el sistema operativo de una computadora  en nuestro curso aprenderas su estructura y funcionamiento asi como sus diferentes lenguajes y frameworks",
    "software":" el software  es el sistema operativo de una computadora  en nuestro curso aprenderas su estructura y funcionamiento asi como sus diferentes lenguajes y frameworks",
    "¿que es el software?":" el software  es el sistema operativo de una computadora  en nuestro curso aprenderas su estructura y funcionamiento asi como sus diferentes lenguajes y frameworks",
    "que es el software?":" el software  es el sistema operativo de una computadora  en nuestro curso aprenderas su estructura y funcionamiento asi como sus diferentes lenguajes y frameworks",
    "como me inscribo":" Dirigite al boton verde de iniciar ya o en la barra de nabegacion da click en iniciar sesión, despues de eso te llevara a la pagina de inscripcion",
    "cual es el proseso":"Dirigite al boton verde de iniciar ya o en la barra de nabegacion da click en iniciar sesión, despues de eso te llevara a la pagina de inscripcion",
    "quiero inscribirme":"Dirigite al boton verde de iniciar ya o en la barra de nabegacion da click en iniciar sesión, despues de eso te llevara a la pagina de inscripcion",
    "registrar":"Dirigite al boton verde de iniciar ya o en la barra de nabegacion da click en iniciar sesión, despues de eso te llevara a la pagina de inscripcion",
    "registrarme":"Dirigite al boton verde de iniciar ya o en la barra de nabegacion da click en iniciar sesión, despues de eso te llevara a la pagina de inscripcion",
    "como me registro":"Dirigite al boton verde de iniciar ya o en la barra de nabegacion da click en iniciar sesión, despues de eso te llevara a la pagina de inscripcion",
    "giru":"!Giru ,giru¡",
    "hola giru":" soy vegeta el principe de los Sayayin insecto, si no trabajo me votan de la casa",
    "perdon":"!Giru ,giru¡",
    "donde estan las esferas del dragon":" eso no se pregunta insecto, insisto esto es una plataforma educativa",
    "donde estan las esferas":" eso no se pregunta insecto, insisto esto es una plataforma educativa",
    "y las esferas":"eso no se pregunta insecto, insisto esto es una plataforma educativa",
    "y tu radar":"eso no se pregunta insecto, insisto esto es una plataforma educativa",
    "adiós": "¡Hasta luego! 😊 e inscribete insecto!",
    "adios": "¡Hasta luego! 😊 e inscribete insecto!",

    "default": "Lo siento, no entiendo la pregunta."
  };

  @ViewChild('chatBox') chatBox!: ElementRef;
  @ViewChild('chatInput') chatInput!: ElementRef;

  toggleChat() {
    this.chatBox.nativeElement.classList.toggle("hidden");
  }

  closeChat() {
    this.chatBox.nativeElement.classList.add("hidden");
  }

  sendMessage() {
    if (this.userInput.trim() === '') return;

    this.messages.push({ sender: 'user', text: this.userInput });

    const response = this.responses[this.userInput.toLowerCase()] || this.responses["default"];
    setTimeout(() => {
      this.messages.push({ sender: 'bot', text: response });
    }, 500);

    this.userInput = '';
  }
}
