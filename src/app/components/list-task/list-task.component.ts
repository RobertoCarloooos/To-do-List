import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskComponent } from "../task/task.component";
import { Task } from '../../interface/task';

@Component({
  selector: 'app-list-task',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './list-task.component.html',
  styleUrl: './list-task.component.css'
})
export class ListTaskComponent {

  @Input() listTask!: Task[]
  @Output() onEliminando = new EventEmitter<Task>()
  @Output() onCambiandoCheck = new EventEmitter<Task>()

  eliminando(msg: Task) {
    this.onEliminando.emit(msg)
  }

  cambiandoCheck(msg: Task) {
    this.onCambiandoCheck.emit(msg)
  }
}
