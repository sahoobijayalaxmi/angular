import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[zoom]'
})
export class ZoomDirective {

  constructor(private ele:ElementRef) { }
  @HostListener('mouseenter') onMouseenter(){
    this.ele.nativeElement.style.transform='scale(1.2,1.2)';
  }

  @HostListener('mouseleave') onMouseleaver(){
    this.ele.nativeElement.style.transform='scale(1,1)';
  }

}
