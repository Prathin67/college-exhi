import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appColorchng]'
})
export class ColorchngDirective {

  constructor(private element:ElementRef) { }

  @HostListener('mouseenter') entering(){
   
    this.element.nativeElement.style['background-color'] = 'white'


    this.element.nativeElement.style['font-size'] = 'xx-small'
    this.element.nativeElement.style['font-style'] = 'italic'
  }
  @HostListener('mouseleave') leaving(){
    
    this.element.nativeElement.style.color = '';
    this.element.nativeElement.style['font-size'] = ''
    this.element.nativeElement.style['font-style'] = ''
    this.element.nativeElement.style['background-color'] = ''
    
  }

}
