import { Component, OnInit, Input, Output,EventEmitter,Directive } from '@angular/core';

@Component({
  selector: 'app-todo-inprogress',
  templateUrl: './todo-inprogress.component.html',
  styleUrls: ['./todo-inprogress.component.css']
})
/* @Directive({
  selector: 'assign-local',
  exportAs: 'assign',
  properties: ['value: assignLocal']
})*/
export class TodoInprogressComponent implements OnInit {
  obj:any;
  @Input() inprogArr:any[];
  @Output() updatedIn = new EventEmitter();
  @Output() updatedInOn = new EventEmitter();
  @Output() updatedInCo = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  setval(obj){
    this.obj=obj;
  }
  moveCompleted(){
    this.updatedIn.emit(1);
  }
  moveInOn(obj){
    this.updatedInOn.emit(obj);
  }
  moveInCo(obj){
    this.updatedInCo.emit(obj);
  }

}
