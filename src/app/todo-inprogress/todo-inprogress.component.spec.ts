/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TodoInprogressComponent } from './todo-inprogress.component';

describe('TodoInprogressComponent', () => {
  let component: TodoInprogressComponent;
  let fixture: ComponentFixture<TodoInprogressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoInprogressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoInprogressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
