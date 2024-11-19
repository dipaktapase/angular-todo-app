import { Component } from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from '../tasks';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.tasks = this.taskService.getTasks();

    setInterval(() => {
      this.tasks = this.taskService.getTasks();
    }, 10000)
  }

  deleteTask(id: number): void {
    this.taskService.deleteTask(id);
    this.tasks = this.taskService.getTasks(); // Refresh the list
  }

  editTask(id: number, newTitle: string, workedHour: number): void {
    this.taskService.updateTask(id, newTitle, workedHour)
  }

  // toggleCompletion(id: number): void {
  //   this.taskService.toggleTaskCompletion(id);
  // }

    // getRemainingTime(task: Task): string {
  //   return this.taskService.getRemainingTime(task);
  // }

}
