import { Component, OnInit } from '@angular/core';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
})
export class TasksComponent implements OnInit {
  tasks: { title: string; description: string; status: string }[] = [];

  constructor(private tasksService: TasksService) {}

  ngOnInit() {
    this.tasks = this.tasksService.tasks;
  }

  onDelete(idx: number) {
    this.tasksService.delete(idx);
  }

  onEdit(idx: number) {
    this.tasksService.updateTask(idx);
  }
}
