import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-inprogress',
  templateUrl: './todo-inprogress.component.html',
  styleUrls: ['./todo-inprogress.component.css']
})
export class TodoInprogressComponent implements OnInit {

  @Input() inprogArr:string[];
  @Output() updatedIn = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  moveCompleted(){
    this.updatedIn.emit(1);
  }
}
