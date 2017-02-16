import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-completed',
  templateUrl: './todo-completed.component.html',
  styleUrls: ['./todo-completed.component.css']
})
export class TodoCompletedComponent implements OnInit {
  obj:any;
  @Input() completedArr:any[];
  @Output() updatedCo= new EventEmitter();
  @Output() updatedCoOn = new EventEmitter();
  @Output() updatedCoIn = new EventEmitter();
  constructor() { }
 
  ngOnInit() {
  }
  setval(obj){
    this.obj=obj;
  }
  moveOut(){
    this.updatedCo.emit(1);
  }
  moveCoOn(obj){
    this.updatedCoOn.emit(obj);
  }
  moveCoIn(obj){
    this.updatedCoIn.emit(obj);
  }
}
