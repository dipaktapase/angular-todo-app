import { Component, OnDestroy } from '@angular/core';
import { TaskService } from '../task.service';
// import { Router } from '@angular/router';
import { ActivatedRoute, Router } from '@angular/router';

import { Task } from '../tasks';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.scss'],
})
export class EditTaskComponent {
  id: number = 0;
  title: string = '';
  workedHour: number = 0;

  private subscription: Subscription;

  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Get the task ID from the route parameters
    this.subscription = this.route.params.subscribe((params) => {
      console.log("params['id']...", params['id']);
      this.id = +params['id'];
      const task = this.taskService.getTaskById(this.id);
      // console.log(task)
      if (task) {
        this.title = task.title;
        this.workedHour = task.workedHour;
      }
    });
    console.log('this.id', this.id);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  editTask(): void {
    if (this.title.trim() && this.id) {
      this.taskService.updateTask(this.id, this.title, this.workedHour);
      this.router.navigate(['/tasks']);
    }
  }
}
