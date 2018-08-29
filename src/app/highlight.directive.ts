import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})

export class HighlightDirective {

  constructor(private el: ElementRef) { }

  @Input('appHighlight') highlightColor: string;

  @HostListener('mouseenter') onmouseenter() {
    this.highlight(this.highlightColor || 'red', '#ffffff');
  }

  @HostListener('mouseleave') nomouseleave() {
    this.highlight(null, null);
  }

  private highlight(color: string, font: string) {
    this.el.nativeElement.style.backgroundColor = color;
    this.el.nativeElement.style.color = font;
  }

}
