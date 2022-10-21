import {EventEmitter, Injectable} from '@angular/core';
import {TaskList} from "../models/task-list";

@Injectable({
  providedIn: 'root'
})
export class TasksService {
 private _taskList:TaskList[]=[];
 private _taskUpdate= new EventEmitter();

 constructor() {
   this.load();
  }

  public addProduct(task:string, type:string){
    this._taskList.push(new TaskList(task, type))
    this.save();
    this._taskUpdate.emit();
  }

  public delete(i:number){
  this._taskList.splice(i, 1);
  this.save();
  this._taskUpdate.emit();
  }

  public update(i:number, task:string, type:string){
  this._taskList[i].task=task;
  this._taskList[i].type=type;
    this._taskUpdate.emit();
  }

  public get task(){
    return this._taskList
  }

  public get taskUpdate(){
   return this._taskUpdate
  }

  public save(){
    localStorage.setItem('belekas',JSON.stringify(this._taskList));
  }

  public load(){
    const data = localStorage.getItem('belekas');
    if(data!=null){
      this._taskList = JSON.parse(data);
    }
  }
}
