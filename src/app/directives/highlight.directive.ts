import { Directive, Input, OnChanges, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})

export class HighlightDirective implements OnChanges {

  @Input('appHighlight') isHighlight: boolean;
  constructor(
    private readonly element: ElementRef,
    private readonly renderer: Renderer2
  ) {
    this.isHighlight = false;
  }

  ngOnChanges(): void {

    if (this.isHighlight) {
      this.renderer.addClass(this.element.nativeElement, 'select-table');
    } else {
      this.renderer.removeClass(this.element.nativeElement, 'select-table');
    }
  }



}
