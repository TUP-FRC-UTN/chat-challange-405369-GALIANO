import { Component } from '@angular/core';
import { UsuarioComponent } from '../usuario/usuario.component';
import { AppComponent, ChatMessage } from '../app.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sala',
  standalone: true,
  imports: [UsuarioComponent, CommonModule],
  templateUrl: './sala.component.html',
  styleUrl: './sala.component.css'
})
export class SalaComponent {
  usuario1: string = "Pepe";
  usuario2: string = "María";
  mensajes: ChatMessage[] = [];
  
  onMessageReceived(msg: ChatMessage){
    this.mensajes.push(msg);
  }
}
