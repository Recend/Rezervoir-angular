import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {TasksService} from "../../services/tasks.service";

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {

  public task:string|null = null;
  public type:string|null = '';

  public types:string[]=["Skubus", "Rutininis", "Neskubus", "Ypač skubus"];

  public index:number|null=null;

  constructor(
              private router:Router,
              private route:ActivatedRoute,
              private tasksService:TasksService
  ) {
    this.index=this.route.snapshot.params['id'];
    if(this.index != null) {
      const taskList = tasksService.task[this.index]
      this.task = taskList.task;
      this.type = taskList.type;
    }

  }

  ngOnInit(): void {
  }

  public update(){
    if(this.index != null && this.task!=null && this.type != null)
    this.tasksService.update(this.index, this.task, this.type)
    this.router.navigate(['/'])
  }



}
