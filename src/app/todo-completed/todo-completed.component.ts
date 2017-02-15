import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-completed',
  templateUrl: './todo-completed.component.html',
  styleUrls: ['./todo-completed.component.css']
})
export class TodoCompletedComponent implements OnInit {

  @Input() completedArr:any[];
  @Output() updatedCo= new EventEmitter();

  constructor() { }
 
  ngOnInit() {
  }
  moveOut(){
    this.updatedCo.emit(1);
  }
}
