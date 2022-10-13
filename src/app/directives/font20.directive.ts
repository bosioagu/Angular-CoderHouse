import { Directive, Input,ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appFont20]'
})
export class Font20Directive {

  @Input() appContenteditableModel: string | undefined;

  constructor(
    private elemento: ElementRef,
    private renderer: Renderer2
  ) {
    this.renderer.setStyle(this.elemento.nativeElement, 'font-size', '20px')
   }

}
