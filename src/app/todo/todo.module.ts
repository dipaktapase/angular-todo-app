import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import { TaskListComponent } from './task-list/task-list.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { TaskItemComponent } from './task-item/task-item.component';
import { FormsModule } from '@angular/forms';
import { EditTaskComponent } from './edit-task/edit-task.component';

@NgModule({
  declarations: [
    TaskListComponent,
    AddTaskComponent,
    TaskItemComponent,
    EditTaskComponent,
  ],
  imports: [CommonModule, TodoRoutingModule, FormsModule],
})
export class TodoModule {}
