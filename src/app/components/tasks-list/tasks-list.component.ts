import { Component, OnInit } from '@angular/core';
import {TaskList} from "../../models/task-list";
import {TasksService} from "../../services/tasks.service";

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {
  public taskList:TaskList[]=[];


  constructor(private tasksService:TasksService) {
    this.taskList=tasksService.task;

  }

  ngOnInit(): void {
  }

  // public delete(i:number){
  //   this.tasksService.delete(i);
  // }

  public onReceiveDelete(i:number){
    this.tasksService.delete(i);
    this.tasksService.taskUpdate.emit();
  }


}
