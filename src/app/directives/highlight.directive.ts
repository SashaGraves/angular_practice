import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input() damage

  constructor(private el: ElementRef, private renderer: Renderer2) {}
  
  ngOnChanges() {
    this.setBorderColor();
  }
  
  setBorderColor() {
    if (this.damage >= 50) {
      this.renderer.setStyle(this.el.nativeElement, 'borderColor', 'red');
    } else {
      this.renderer.setStyle(this.el.nativeElement, 'borderColor', '#369');
    }
    console.log('damage:', this.damage);
  }
}
