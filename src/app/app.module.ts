import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RainComponent } from './components/rain/rain.component';
import {FormsModule} from "@angular/forms";
import { TasksListComponent } from './components/tasks-list/tasks-list.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import {TaskComponent} from "./components/tasks-list/task/task.component";
import { TaskListDetailsComponent } from './components/task-list-details/task-list-details.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import {RouterModule, Routes} from "@angular/router";
import { EditTaskComponent } from './components/edit-task/edit-task.component';


const appRoutes:Routes=[
  {path:"", component:TasksListComponent},
  {path:"new", component:AddTaskComponent},
  {path:"edit/:id", component:EditTaskComponent},
  {path:"rezervuaras", component:RainComponent},
]


@NgModule({
  declarations: [
    AppComponent,
    RainComponent,
    TasksListComponent,
    AddTaskComponent,
    TaskComponent,
    TaskListDetailsComponent,
    NavigationComponent,
    EditTaskComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
