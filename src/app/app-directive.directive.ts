import { Directive, ElementRef, OnInit, HostListener } from '@angular/core';

@Directive({
  selector: '[app-directive]',
})
export class MyDirective implements OnInit {
  constructor(private ElementRef: ElementRef) {} // private to make ElementRef property of this class

  ngOnInit(): void {
    // this.ElementRef.nativeElement.style.backgroundColor = 'red';
  }

  @HostListener('mouseenter') yes() {
    // yes can have any name
    this.ElementRef.nativeElement.style.backgroundColor = 'red';
  }
}
