import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoItemComponent } from './todo-item.component';
import { ToDo } from '../../model/todo.model';
import { By } from '@angular/platform-browser';
import { SpinnerComponent } from '../spinner/spinner.component';

describe('ToDoItemComponent', () => {
  let component: TodoItemComponent;
  let fixture: ComponentFixture<TodoItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TodoItemComponent, SpinnerComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render a spinner if the todo has no id', () => {
    component.todo = new ToDo();

    fixture.detectChanges();
    expect(fixture.debugElement.query(By.directive(SpinnerComponent))).not.toBeNull();
    expect(fixture.debugElement.query(By.css('button'))).toBeNull();
  });

  it('should render a button if the todo has an id', () => {
    const toDo = new ToDo();
    toDo.id = '123';
    component.todo = toDo;

    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('button'))).not.toBeNull();
    expect(fixture.debugElement.query(By.directive(SpinnerComponent))).toBeNull();
  });
});
