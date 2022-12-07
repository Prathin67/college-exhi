import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appColorchng]'
})
export class ColorchngDirective {

  constructor(private element:ElementRef) { }

  @HostListener('mouseenter') entering(){
    console.log('---',this.element.nativeElement);

    this.element.nativeElement.style['font-size'] = 'xx-small'
    this.element.nativeElement.style['font-style'] = 'italic'
  }
  @HostListener('mouseleave') leaving(){
    console.log('-----',this.element.nativeElement);
    this.element.nativeElement.style.color = '';
    this.element.nativeElement.style['font-size'] = ''
    this.element.nativeElement.style['font-style'] = ''
    
  }

}
