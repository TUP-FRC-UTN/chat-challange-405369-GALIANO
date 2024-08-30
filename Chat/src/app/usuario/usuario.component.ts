import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-usuario',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.css'
})
export class UsuarioComponent {
  @Output() inputMade = new EventEmitter<string>;
  inputMsg: string = ""; 

  makeInput(){
    this.inputMade.emit(this.inputMsg);
  }
}
