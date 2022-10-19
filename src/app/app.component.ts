import { Component } from '@angular/core';
import {TasksService} from "./services/tasks.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tasks-list';

  constructor(private tasksService:TasksService) {
    tasksService.load();
  }


}

