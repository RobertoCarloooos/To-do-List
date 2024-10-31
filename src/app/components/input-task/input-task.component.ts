import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-task',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './input-task.component.html',
  styleUrls: ['./input-task.component.css']
})
export class InputTaskComponent {
  newText: string = '';
  mensajeError: string = ''; // Variable para almacenar el mensaje de error
  @Output() onEnviarTarea = new EventEmitter<string>();

  enviarTarea() {
    if (this.newText.trim() === '') {
      this.mensajeError = 'Por favor, rellene el campo para continuar !';
    } else {
      this.onEnviarTarea.emit(this.newText);
      this.newText = '';
      this.mensajeError = ''; // Limpia el mensaje de error después de enviar
    }
  }
}

