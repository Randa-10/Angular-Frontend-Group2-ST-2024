import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appImgstyle]',
  standalone: true,
})
export class ImgstyleDirective {
  constructor(public elem: ElementRef) {
    //document.getElementById
    this.elem.nativeElement.style.border = '2px solid black';
  }

  @HostListener('mouseover') mouseover() {
    this.elem.nativeElement.style.border = '4px solid red';
  }

  @HostListener('mouseout') mouseout() {
    this.elem.nativeElement.style.border = '2px solid black';
  }
}
