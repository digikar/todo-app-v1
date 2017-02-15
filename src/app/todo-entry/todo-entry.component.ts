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
    today = new Date();
    dd = this.today.getDate();
    mm = this.today.getMonth()+1; //January is 0!
    yyyy = this.today.getFullYear();
   // entryObj: { entry: string,entryDesc: string };
    constructor(){
      /* if(this.dd<10) {
        this.dd='0'+this.dd
       } 

       if(this.mm<10) {
        this.mm='0'+this.mm
       } 

       this.today = this.mm+'/'+this.dd+'/'+this.yyyy;*/
      }
    
     ngOnInit() {
    }

  //  entryObj=new todo_entries(this.entry,this.entryDesc);
    
   
    addEntry(){
      if((this.entry==undefined)||this.entry=="")
       alert("Dont try to be smart. Enter your TODO task first!");
      else{
        console.log(this.entry);
        this.entryObj=new todo_entries(this.entry,this.entryDesc);
        //this.entryObj.entry=this.entry;
        //this.entryObj.entryDesc=this.entryDesc;
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


    
    }

