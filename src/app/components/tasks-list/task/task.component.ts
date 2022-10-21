import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TaskList} from "../../../models/task-list";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {


  @Input() task:TaskList|null=null;
  @Input() index:number|null=null;

  @Output() taskDelete = new EventEmitter<number>();


  constructor() { }

  ngOnInit(): void {
  }

  public buttonDel(){
    if(this.index !=null){
    this.taskDelete.emit(this.index);
    }
  }


}
