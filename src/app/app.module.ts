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
import { CurrenciesComponent } from './components/currencies/currencies.component';
import {HttpClientModule} from "@angular/common/http";
import { ListComponent } from './components/courses/list/list.component';
import { EditComponent } from './components/courses/edit/edit.component';
import { NewComponent } from './components/courses/new/new.component';


const appRoutes:Routes=[
  {path:"", component:TasksListComponent},
  {path:"new", component:AddTaskComponent},
  {path:"edit/:id", component:EditTaskComponent},
  {path:"rezervuaras", component:RainComponent},
  {path:"currencies", component:CurrenciesComponent},
  {path:"courses",component:ListComponent},
  {path:"courses/:id",component:EditComponent},
  {path:"newcourse", component:NewComponent},
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
    EditTaskComponent,
    CurrenciesComponent,
    ListComponent,
    EditComponent,
    NewComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
