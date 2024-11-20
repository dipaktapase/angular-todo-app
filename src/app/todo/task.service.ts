import { Injectable } from '@angular/core';
import { Task } from './tasks';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasks: Task[] = [
    {
      id: 1,
      title: 'Learn Angular',
      completed: false,
      timeleft: 30,
      workedHour: 15,
    },
    {
      id: 2,
      title: 'Build a Todo App',
      completed: false,
      timeleft: 24,
      workedHour: 5,
    },
    {
      id: 3,
      title: 'Test Functionality',
      completed: true,
      timeleft: 23,
      workedHour: 10,
    },
  ];

  getTasks(): Task[] {
    return this.tasks;
  }

  addTask(title: string, timeleft: number): void {
    const newTask: Task = {
      id: Date.now(),
      title,
      completed: false,
      timeleft: timeleft,
      workedHour: 0,
    };
    this.tasks.push(newTask);
  }

  getTaskById(id: number): Task | undefined {
    return this.tasks.find((task) => task.id === id);
  }

  updateTask(
    id: number,
    newTitle: string,
    additionalWorkedHours: number
  ): void {
    const task = this.tasks.find((task) => task.id == id);

    if (task) {
      task.title = newTitle;

      if (task.timeleft >= additionalWorkedHours) {
        task.workedHour = additionalWorkedHours;
        task.timeleft = task.timeleft - additionalWorkedHours;
      } else if (task.timeleft === 0) {
        alert('Contracts You complete the task');
      } else {
        alert('Workedhour should be less than pendinghour');
      }
    }
  }

  deleteTask(id: number): void {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }

  constructor() {}
}
