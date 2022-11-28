import { TodolistComponent } from './../../../../../todolist-graphql-fe/src/app/todolist/todolist.component';
import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TodoitemComponent } from './todoitem.component';

@Component({
  template: `<app-todoitem [todo]="todo"></app-todoitem>`,
})
class MockComponent {
  todo = {
    id: 5,
    title: '',
    userId: 5,
    completed: false,
  };
}

describe('TodoitemComponent', () => {
  let component: TodoitemComponent;
  let fixture: ComponentFixture<TodoitemComponent>;

  let todolistcomponent: MockComponent;
  let todolistfixture: ComponentFixture<MockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TodoitemComponent, TodolistComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TodoitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    todolistfixture = TestBed.createComponent(MockComponent);
    todolistcomponent = todolistfixture.componentInstance;
    todolistfixture.detectChanges();
  });

  it('should get the input data from the parent component', () => {
    const testcomponent =
      todolistfixture.debugElement.children[0].componentInstance;
    expect(testcomponent.todo).toEqual({
      id: 5,
      title: '',
      userId: 5,
      completed: false,
    });
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
