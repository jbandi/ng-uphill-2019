import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTodoComponent } from './new-todo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SpinnerComponent } from '../spinner/spinner.component';
import { By } from '@angular/platform-browser';
import { ToDo } from '../../model/todo.model';

describe('TestComponent', () => {
  let component: NewTodoComponent;
  let fixture: ComponentFixture<NewTodoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NewTodoComponent, SpinnerComponent],
      imports: [ReactiveFormsModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not render the add button initially', () => {
    expect(fixture.debugElement.query(By.css('button'))).toBeNull();
  });

  it('should render the add button when a valid input is enterd', () => {
    component.form.patchValue({ newToDoTitle: 'Valid String' });
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('button'))).not.toBeNull();
  });

  it('should render a spinner when saving', () => {
    component.saving = true;
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('button'))).toBeNull();
    expect(fixture.debugElement.query(By.directive(SpinnerComponent))).not.toBeNull();
  });

  it('should emit a new todo instance when the form is submitted', () => {
    spyOn(component.addToDo, 'emit');
    component.form.patchValue({ newToDoTitle: 'Random Title' });
    fixture.detectChanges();
    const form = fixture.debugElement.query(By.css('form'));
    // component.onAddToDo();
    form.nativeElement.dispatchEvent(new Event('submit'));
    expect(component.addToDo.emit).toHaveBeenCalled();
    expect(component.addToDo.emit).toHaveBeenCalledWith(new ToDo('Random Title'));
  });
});
