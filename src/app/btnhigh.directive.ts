import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appBtnhigh]'
})
export class BtnhighDirective {

  constructor(private el:ElementRef) { }

  @HostListener('mouseenter') onover() {
    console.log('---',this.el.nativeElement);
    this.el.nativeElement.style.background='red';
    
  }

}