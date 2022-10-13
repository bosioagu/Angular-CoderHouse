import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBooleanStyle]'
})
export class BooleanStyleDirective  implements OnInit{

  @Input('appBooleanStyle') inscripcionAbierta!: boolean;

  constructor(
    private elemento: ElementRef,
    private renderer: Renderer2
  ) { }

  ngOnInit(): void {
    this.renderer.setStyle(this.elemento.nativeElement, 'padding', '0px 10px 0px 10px')
    this.renderer.setStyle(this.elemento.nativeElement, 'border-radius', '30px')
    this.renderer.setStyle(this.elemento.nativeElement, 'color', '#FFFFFF')
    this.renderer.setStyle(this.elemento.nativeElement, 'background-color', this.inscripcionAbierta ? '#4cAF50' : '#F44336')
  }

}
