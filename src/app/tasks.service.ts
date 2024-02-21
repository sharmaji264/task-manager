import { EventEmitter, Injectable } from '@angular/core';

@Injectable()
export class TasksService {
  tasks: { title: string; description: string; status: string }[] = [
    {
      title: 'Task 1',
      description: 'Study',
      status: 'To Do',
    },
    {
      title: 'Task 2',
      description: 'Playing',
      status: 'In Progress',
    },
    {
      title: 'Task 3',
      description: 'Cooking',
      status: 'Done',
    },
  ];
  statusUpdated = new EventEmitter<string>();

  constructor() {}

  addAccount(title: string, description: string, status: string) {
    if (title === '' || description === '' || status === '') {
      alert('Please enter all fields');
      return;
    }
    if (status !== 'In Progress' && status !== 'Done' && status !== 'To Do') {
      alert('Wrong Status');
      return;
    }
    this.tasks.push({ title: title, description: description, status: status });
    alert('Task Added');
  }

  updateTask(index: number) {
    const status = window.prompt('Enter the status');
    console.log(status);
    if (status !== 'In Progress' && status !== 'Done' && status !== 'To Do') {
      alert('Wrong Status');
      return;
    }
    this.tasks[index].status = status;
  }

  delete(index: number) {
    this.tasks.splice(index, 1);
  }
}
