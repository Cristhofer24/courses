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
    "hola": "¡Hola! ¿Cómo puedo ayudarte?",
    "¿cómo estás?": "Soy un bot, pero estoy bien. ¿Y tú?",
    "adiós": "¡Hasta luego! 😊",
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
