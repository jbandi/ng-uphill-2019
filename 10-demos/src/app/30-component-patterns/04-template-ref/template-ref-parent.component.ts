import {AfterViewInit, Component, OnInit, TemplateRef, ViewChild} from '@angular/core';

@Component({
  styles: [':host {display: block; border: 1px solid silver; padding: 20px}'],
  template: `

    <ng-template #greeting let-name="name">
      <div style="background-color: yellow">
        <h3>This is a template!</h3>
        <p>My name is {{name}}</p>
      </div>
    </ng-template>

    <ng-template #time let-time="time">
      <div style="background-color: cyan">
        <h3>This is another template!</h3>
        <p>The time is {{time}}</p>
      </div>
    </ng-template>

    <aw-custom-container [innerTemplate]="currentTemplate" [templateContext]="templateContext"></aw-custom-container>

    <hr>

    <button (click)="toggle()">Toggle!</button>
  `
})

export class TemplateRefParentComponent implements AfterViewInit {

  @ViewChild('greeting') greetingTemplate: TemplateRef<any>;
  @ViewChild('time') timeTemplate: TemplateRef<any>;

  currentTemplate: TemplateRef<any>;
  templateContext: any;

  ngAfterViewInit() {
    setTimeout(() => {
      this.currentTemplate = this.greetingTemplate;
      this.templateContext = {name: 'Tyler Durden'};
    }, 0);
  }

  toggle() {
    if (this.currentTemplate === this.greetingTemplate) {
      this.currentTemplate = this.timeTemplate;
      this.templateContext = {time: new Date()};
    } else {
      this.currentTemplate = this.greetingTemplate;
      this.templateContext = {name: 'Tyler Durden'};
    }
  }

}

// //DEMO: Pass the toggle function into the template:
//
// this.templateContext = {time: new Date(), toggle: () => this.toggle()};
//
// <ng-template #greeting let-name="name" let-toggle="toggle">
//
// <button (click)="toggle()">Toggle</button>
