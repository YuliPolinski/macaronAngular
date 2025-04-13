import { Directive, ElementRef, Renderer2, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appButtonHover]'
})
export class ButtonHoverDirective implements OnInit {

  @Input() defaultBackground: string = 'linear-gradient(to bottom, rgb(215, 72, 92) 0%, rgb(113, 8, 30) 100%)';
  @Input() hoverShadow: string = '0 7px 20px 0 #7c0f24';

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.setBackground(this.defaultBackground);
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.setStyle(this.el.nativeElement, 'boxShadow', this.hoverShadow);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setBackground(this.defaultBackground);
    this.renderer.removeStyle(this.el.nativeElement, 'boxShadow');
  }

  private setBackground(background: string): void {
    this.renderer.setStyle(this.el.nativeElement, 'backgroundImage', background);
  }
}
