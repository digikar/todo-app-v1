import { Component, OnInit } from '@angular/core';
import { ClarityModule } from 'clarity-angular';

@Component({
  selector: 'app-todo-entry',
  templateUrl: './todo-entry.component.html',
  styleUrls: ['./todo-entry.component.css']
})


export class TodoEntryComponent implements OnInit {
 // @ViewChild('input') input;
    id:number=1;
    entry:string;
    status:number;
    entryArr1=[];
    entryArr2=[];
    entryArr3=[];
    removed:string;
    //entryArr.push(entry);
    //dummy:string="fdlgfkdg";
    constructor(){}
    
     ngOnInit() {
    }
 //   constructor(_entry:string){
    //    this.id++;
    //    this.entry=_entry;
   //     this.status=1; }
    
   
    addEntry(){
      if((this.entry==undefined)||this.entry=="")
       alert("Dont try to be smart. Enter your TODO task first!");
      else{
        console.log(this.entry);
        this.entryArr1.push(this.entry);
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

