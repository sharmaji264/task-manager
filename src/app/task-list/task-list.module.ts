import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { TasksComponent } from './task-list.component';

@NgModule({
  declarations: [TasksComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [TasksComponent],
})
export class AppModule {}
