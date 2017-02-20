import { Component, OnInit } from '@angular/core';
import { ClarityModule } from 'clarity-angular';
import { todo_entries} from '../todo-entry/todo-entries';
@Component({
  selector: 'app-todo-entry',
  templateUrl: './todo-entry.component.html',
  styleUrls: ['./todo-entry.component.css']
})


export class TodoEntryComponent implements OnInit {
    id:number=1;
    entry:string;
    entryDesc:string;
    status:number;
    entryArr1=[];
    entryArr2=[];
    entryArr3=[];
    removed:string;
    entryObj:any;


    constructor(){  
    }
    
     ngOnInit() {
    }

    addEntry(){
      if((this.entry==undefined)||this.entry=="")
       alert("Dont try to be smart. Enter your TODO task first!");
      else{
        console.log(this.entry);
        this.entryObj=new todo_entries(this.entry,this.entryDesc);
    
        this.entryArr1.push(this.entryObj);
        console.log(this.entryObj.entry);
      }
      
    }
    addInprogress(status:number){
      if(status){
        var remove=this.entryArr1.shift();
        if(remove!=undefined){
           this.entryArr2.push(remove);
           console.log(remove);
        }
        else
          alert("Hold On! There are no tasks to move.");

      }
    }
    addCompleted(status:number){
      if(status){
        var remove=this.entryArr2.shift();
        if(remove!=undefined){
          this.entryArr3.push(remove);
          console.log(remove);
      }
       else
          alert("Hold On! There are no tasks to move.");
    }
    }

    removeEntry(status:number){
      this.removed= this.entryArr3.shift();
      if(this.removed==undefined){   
        alert("Hold On! There are no tasks to delete.");
      }
      console.log(this.removed);
    
    }

    add_Inprogress_ongoing(obj){                         //add to inprogress from ongoing
      var i=this.entryArr1.indexOf(obj);
      var remove=this.entryArr1[i];
      this.entryArr2.push(remove);
      if(i>-1){
        this.entryArr1.splice(i,1);
      }
      console.log(remove);
    }

    add_Completed_ongoing(obj){
      var i= this.entryArr1.indexOf(obj);
      var remove=this.entryArr1[i];
      this.entryArr3.push(remove);
      if(i>-1){
        this.entryArr1.splice(i,1);
      }
    }
    
    add_Ongoing_inprogress(obj){
      var i=this.entryArr2.indexOf(obj);
      var remove= this.entryArr2[i];
      this.entryArr1.push(remove);
      if(i>-1){
        this.entryArr2.splice(i,1);
      }
    }

    add_Completed_inprogress(obj){
      var i=this.entryArr2.indexOf(obj);
      var remove=this.entryArr2[i];
      this.entryArr3.push(remove);
      if(i>-1){
        this.entryArr2.splice(i,1);
      }
    }

    add_Ongoing_completed(obj){
      var i= this.entryArr3.indexOf(obj);
      var remove=this.entryArr3[i];
      this.entryArr1.push(remove);
      if(i>-1){
        this.entryArr3.splice(i,1);
      }
    }

    add_Inprogress_completed(obj){
      var i=this.entryArr3.indexOf(obj);
      var remove=this.entryArr3[i];
      this.entryArr2.push(remove);
      if(i>-1){
        this.entryArr3.splice(i,1);
      }
    }
    }

