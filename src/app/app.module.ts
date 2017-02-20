import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ClarityModule} from 'clarity-angular';

import { AppComponent } from './app.component';
import { TodoEntryComponent } from './todo-entry/todo-entry.component';
import { TodoOngoingComponent } from './todo-ongoing/todo-ongoing.component';
import { TodoInprogressComponent } from './todo-inprogress/todo-inprogress.component';
import { TodoCompletedComponent } from './todo-completed/todo-completed.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoEntryComponent,
    TodoOngoingComponent,
    TodoInprogressComponent,
    TodoCompletedComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ClarityModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
