import {AfterViewInit, Component, ComponentFactoryResolver, OnInit, TemplateRef, ViewChild, ViewContainerRef} from '@angular/core';
import {DynamicChildComponent} from './dynamic-child.component';

@Component({
  styles: ['.kingdom {display: block; border: 1px solid silver; padding: 20px}'],
  template: `

    A kingdom for a dynamic component:
    <div class="kingdom">
      <ng-template #container></ng-template>
    </div>


    <button (click)="create()">Create!</button>
  `
})

export class DynamicCreationParentComponent {

  @ViewChild('container', {read: ViewContainerRef}) viewContainer: ViewContainerRef;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {
  }

  create() {

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(DynamicChildComponent);

    this.viewContainer.clear();
    this.viewContainer.createComponent(componentFactory);

  }

}

// //DEMO:
//
// Get the component instance:
// const componentRef = this.viewContainer.createComponent(componentFactory);
//
// componentRef.instance.message = 'Hello from the creator!'
//
