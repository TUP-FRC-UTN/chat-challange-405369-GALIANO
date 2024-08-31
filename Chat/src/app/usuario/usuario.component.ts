import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent, ChatMessage } from '../app.component';

@Component({
  selector: 'app-usuario',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.css'
})
export class UsuarioComponent {
  @Input() usuario: string = "";
  @Output() newMessage = new EventEmitter<ChatMessage>;
  inputMsg: string = ""; 
  mensaje: ChatMessage | undefined;

  sendMsg(){  
    this.mensaje = { usuario: this.usuario, mensaje: this.inputMsg };
    this.newMessage.emit(this.mensaje);
    this.inputMsg = "";
  }
}
