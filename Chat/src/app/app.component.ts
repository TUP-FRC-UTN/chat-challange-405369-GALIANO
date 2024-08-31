import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UsuarioComponent } from './usuario/usuario.component';
import { SalaComponent } from './sala/sala.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SalaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Chat';
}

export interface ChatMessage {
  usuario: string;
  mensaje: string;
}
