import {Directive, ElementRef, Input, HostListener, OnInit, Renderer2} from '@angular/core';

@Directive({selector: '[awHighlight]'})
export class HighlightDirective implements OnInit {

  private defaultColor = 'yellow';

  // @Input('awHighlight') highlightColor: string; // tslint:disable-line

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit(): void {

    // Note: The view seems to be available in ngOnInit for directives
    // In analogy to components I would expect to access the view in ngAfterViewInit

    this.highlight(this.defaultColor);
    // this.highlight(this.highlightColor || this.defaultColor);
  }

  private highlight(color: string) {
    this.elementRef.nativeElement.style.backgroundColor = color;

    // Better abstraction of render target:
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', color);
  }

  // @HostListener('mouseenter') onMouseEnter() {
  //     this.highlight(this.defaultColor);
  // }
  // @HostListener('mouseleave') onMouseLeave() {
  //     this.highlight(null);
  // }

}
