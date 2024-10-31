import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './input-task.component.html',
  styleUrl: './input-task.component.css'
})
export class InputTaskComponent {
  newText: string= "";
  @Output() onEnviarTarea = new EventEmitter <string> ()
  
  
  enviarTarea(){
    this.onEnviarTarea.emit(this.newText)
    this.newText= "";
  
  }
}
