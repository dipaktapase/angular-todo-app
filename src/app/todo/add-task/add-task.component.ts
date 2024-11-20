import { Component } from '@angular/core';
import { Router } from '@angular/router'
import { TaskService } from '../task.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent {
  title: string = '';
  timeleft: number = 0;

  constructor(private taskService: TaskService, private router: Router) {}

  addTask(): void {
    if (this.title.trim()) {
      this.taskService.addTask(this.title, this.timeleft);
      this.router.navigate(['/tasks']);
    }
  }
}
