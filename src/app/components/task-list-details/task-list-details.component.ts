import { Component, OnInit } from '@angular/core';
import {TasksService} from "../../services/tasks.service";

@Component({
  selector: 'app-task-list-details',
  templateUrl: './task-list-details.component.html',
  styleUrls: ['./task-list-details.component.css']
})
export class TaskListDetailsComponent implements OnInit {

  public count:number|null=null;
  public types=["Skubus", "Rutininis", "Neskubus", "Ypač skubus"];
  public countTypes:number=0;

  constructor(private tasksService:TasksService) {
    this.count = this.tasksService.task.length

    this.tasksService.taskUpdate.subscribe(()=>{
      this.count = this.tasksService.task.length

    });
  }


  public calculate(tipai:string){
    const tasks=this.tasksService.task;
    this.countTypes=0;
    tasks.forEach((tasks)=> {
      if (tasks.type == tipai ) {
        this.countTypes++;
      }
    });
    return this.countTypes;
  }

  ngOnInit(): void {
  }

}
