import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../../interface/task';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {

  @Input() tarea!: Task
  @Output() onEliminar = new EventEmitter<Task>()
  @Output() onCambiarCheck = new EventEmitter<Task>()

  eliminar() {
    this.onEliminar.emit(this.tarea)
  }

  cambiarCheck() {
    this.onCambiarCheck.emit(this.tarea)
  }

}
