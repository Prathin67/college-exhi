import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appBtnhigh]'
})
export class BtnhighDirective {

  constructor(private el:ElementRef) { }

  @HostListener('mouseenter') onover() {
    
    this.el.nativeElement.style.background='red';
    
  }

  @HostListener('mouseleave') leaving(){

    this.el.nativeElement.style.background='';

  }


}