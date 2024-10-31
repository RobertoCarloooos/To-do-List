import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InputTaskComponent } from "./components/input-task/input-task.component";
import { ListTaskComponent } from "./components/list-task/list-task.component";
import { Task } from './interface/task';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, InputTaskComponent, ListTaskComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  listaTarea: Task[] = [{ text: 'hacer la colada', state: true }, { text: 'comprar pan', state: false }]


  tareaEnviada(msg: string) {
    if (this.listaTarea.find(tarea => tarea.text === msg) === undefined) {
      this.listaTarea.push({ text: msg, state: false })
    }
  }

  eliminado(msg: Task) {
    const i = this.listaTarea.findIndex(tarea => tarea.text === msg.text)
    this.listaTarea.splice(i, 1)
  }

  checkCambiado(msg: Task) {
    for (const tarea of this.listaTarea) {
      if (tarea.text === msg.text) {
        tarea.state = !tarea.state
      }
    }
  
}
}
