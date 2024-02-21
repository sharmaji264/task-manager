import { Component, Input } from '@angular/core';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrl: './update.component.css',
})
export class UpdateComponent {
  @Input() element: string;
  constructor(private tasksService: TasksService) {}
  onCreateAccount(title: string, description: string, status: string) {
    this.tasksService.addAccount(title, description, status);
  }
}
