import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {By} from '@angular/platform-browser';

import { HelloComponent } from './hello.component';
import {FormsModule} from '@angular/forms';

describe('HelloComponent', () => {
  let component: HelloComponent;
  let fixture: ComponentFixture<HelloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelloComponent ],
      imports: [FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have a default greeting name`, () => {
    const app = fixture.debugElement.componentInstance;
    expect(app.greetingName).toEqual('World');
  });

  it(`should render the greeting`, () => {
    const domElement = fixture.debugElement.nativeElement;
    expect(domElement.textContent).toContain('Hello, World!');
  });

  it(`should update the greeting`, () => {
    const newGreetingName = 'Test';
    const inputDomElement = fixture.debugElement.query(By.css('#greeting-input')).nativeElement;
    inputDomElement.value = newGreetingName;
    inputDomElement.dispatchEvent(new Event('input')); // leaking abstraction !?!
    expect(component.greetingName).toEqual(newGreetingName);

    fixture.detectChanges();
    const messageDomElement = fixture.debugElement.query(By.css('#greeting-message')).nativeElement;
    expect(messageDomElement.textContent).toContain(newGreetingName);
  });

});
