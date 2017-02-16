import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-ongoing',
  templateUrl: './todo-ongoing.component.html',
  styleUrls: ['./todo-ongoing.component.css']
})
export class TodoOngoingComponent implements OnInit {

  obj:any;
  //ele:any;
  @Input() goingArr:any[];
  @Output() updatedOn= new EventEmitter();
  @Output() updatedOnIn= new EventEmitter();
  @Output() updatedOnCo= new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  setval(obj){
    this.obj=obj;
  }
  moveInprogress(){
    this.updatedOn.emit(1);
  }
  moveOnIn(){
    this.updatedOnIn.emit(this.obj);
  }
  moveOnCo(){
    this.updatedOnCo.emit(this.obj);
  }
  
}
