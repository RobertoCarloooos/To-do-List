import { Component, Input } from '@angular/core';
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

  @Input() listTask! : Task []
}
