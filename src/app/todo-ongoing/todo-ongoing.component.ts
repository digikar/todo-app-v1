import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-ongoing',
  templateUrl: './todo-ongoing.component.html',
  styleUrls: ['./todo-ongoing.component.css']
})
export class TodoOngoingComponent implements OnInit {

  @Input() goingArr:string[];
  @Output() updatedOn= new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  moveInprogress(){
    this.updatedOn.emit(1);
  }
}
