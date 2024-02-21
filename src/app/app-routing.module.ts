import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TasksComponent } from './task-list/task-list.component';
import { DescriptionComponent } from './description/description.component';
import { UpdateComponent } from './update/update.component';

const appRoutes: Routes = [
  { path: 'tasks', component: TasksComponent },
  { path: 'description', component: DescriptionComponent },
  { path: 'update', component: UpdateComponent },
  // { path: '**', redirectTo: '/not-found' },
];

@NgModule({
  imports: [
    // RouterModule.forRoot(appRoutes, {useHash: true})
    RouterModule.forRoot(appRoutes),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
