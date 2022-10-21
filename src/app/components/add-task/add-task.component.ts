import { Component, OnInit } from '@angular/core';
import {TasksService} from "../../services/tasks.service";
import {TaskList} from "../../models/task-list";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  public task:string|null = null;
  public type:string|null = '';

  public types:string[]=["Skubus", "Rutininis", "Neskubus", "Ypač skubus"];

  constructor(private tasksService:TasksService, private router:Router) {

  }

  ngOnInit(): void {
  }

  public addTask(){
    if(this.task != null && this.type != null ){
      this.tasksService.addProduct(this.task, this.type);
      this.task=null;
      this.type=null;
      this.router.navigate(['/'])

    }
  }

}
