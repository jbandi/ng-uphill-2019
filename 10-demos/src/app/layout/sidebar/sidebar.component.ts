import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';


const sidebarContent = [
  {
    title: 'Basics',
    links: [
      {url: '/databinding', title: '01.01 Databinding'},
      {url: '/structural-directives', title: '01.02 Structural Directives'},
      {url: '/nested-components', title: '01.03 Nested Components'},
      {url: '/lifecycle', title: '01.04 Lifecycle'},
      {url: '/service', title: '01.05 Service'},
    ]
  },
  {
    title: 'Forms',
    links: [
      {url: '/forms/single-control-reactive', title: '02.01 Single Control Reactive'},
      {url: '/forms/reactive-form', title: '02.02 Reactive Form'},
      {url: '/forms/single-control-ngmodel', title: '02.03 Single Control ngModel'},
      {url: '/forms/template-driven-form', title: '02.04 Template Driven Form'},
      {url: '/forms/dynamic-form', title: '02.10 Dynamic Form'},
    ]
  },
  {
    title: 'Backend',
    links: [
      {url: '/backend/backend-access', title: '03.01 Backend Access'},
      {url: '/backend/backend-crud', title: '03.02 Backend CRUD'},
      {url: '/backend/backend-search', title: '03.03 Backend Search'},
    ]
  },
  {
    title: 'Routing',
    links: [
      {url: '/routing/route-snapshot/42', title: '04.01 Route Snapshot'},
      {url: '/routing/route-observable/42', title: '04.02 Route Observable'},
      {url: '/routing/children', title: '04.10 Child Routing'},
      {url: '/routing/multiple-routes', title: '04.20 Multiple Routes'},
    ]
  },
  {
    title: 'UI Constructs',
    links: [
      {url: '/ui-constructs/attribute-directive', title: '05.01 Attribute Directive'},
      {url: '/ui-constructs/pipes', title: '05.02 Pipes'},
      {url: '/ui-constructs/custom-pipes', title: '05.03 Custom Pipe'},
      {url: '/ui-constructs/styling', title: '05.04 Styling'},
      {url: '/ui-constructs/dependency-injection', title: '05.05 Dependency Injection'},
      {url: '/ui-constructs/content-projection', title: '05.06 Content Projection'},
      {url: '/ui-constructs/two-way-binding', title: '05.21 Two-Way Binding'},
      {url: '/ui-constructs/inheritance', title: '05.30 Component Inheritance'},
    ]
  },
  {
    title: 'Dependency Injection',
    links: [
      {url: '/dependency-injection/providers', title: 'Providers'},
    ]
  },
  {
    title: 'Change Tracking',
    links: [
      {url: '/change-tracking/zonejs', title: 'Zone.js'},
      {url: '/change-tracking/async-await', title: 'Async Await'},
      {url: '/change-tracking/demo', title: 'Default CD'},
      {url: '/change-tracking/on-push', title: 'On Push'},
      {url: '/change-tracking/counter', title: 'With Service'},
      {url: '/change-tracking/observable', title: 'With Observable Service'},
      {url: '/change-tracking/expression-changed', title: 'ExpressionChanged'},
    ]
  },
  {
    title: 'Component Patterns',
    links: [
      {url: '/component-patterns/parent-injection', title: '30.01 Parent Injection'},
      {url: '/component-patterns/compound-component', title: '30.02 Compound Component'},
      {url: '/component-patterns/ng-templates', title: '30.03 ng-template'},
      {url: '/component-patterns/template-property', title: '30.04 template property'},
      {url: '/component-patterns/dynamic-component', title: '30.05 dynamic component'},
    ]
  },
  {
    title: 'i18n',
    links: [
      {url: '/internationalization/translated', title: '60.01 ngx translate'},
    ]
  },
];


@Component({
  selector: 'aw-sidebar',
  templateUrl: './sidebar.component.html',
  styles: ['.chapter-link {padding-left: 20px}']
})
export class SidebarComponent implements OnInit {

  expandedChapters = [];
  chapters = sidebarContent;

  constructor(private router: Router) { }

  ngOnInit() {

    this.router.events.subscribe(navigationEvent => {
      if (navigationEvent instanceof NavigationEnd) {
        for (const chapter of this.chapters) {
          if (chapter.links.find(l => l.url === navigationEvent.url)) {
            this.expandedChapters.push(chapter);
          }
        }
      }
    });
  }

  toggleChapter(chapter) {
    if (this.isExpanded(chapter)) {
      this.expandedChapters = this.expandedChapters.filter(c => c !== chapter);
    } else {
      this.expandedChapters = this.expandedChapters.concat(chapter);
    }
  }

  isExpanded(chapter) {
    return this.expandedChapters.includes(chapter);
  }
}
