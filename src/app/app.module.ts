import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TasksComponent } from './task-list/task-list.component';
import { MyDirective } from './app-directive.directive';
import { TasksService } from './tasks.service';
import { AppRoutingModule } from './app-routing.module';
import { DescriptionComponent } from './description/description.component';
import { UpdateComponent } from './update/update.component';
@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    MyDirective,
    DescriptionComponent,
    UpdateComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [TasksService],
  bootstrap: [AppComponent],
})
export class AppModule {}
