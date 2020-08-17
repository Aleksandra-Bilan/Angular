import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[bigDamage]'
})
export class DamageDirective{

  constructor(private elementRef: ElementRef){
    this.elementRef.nativeElement.style.border = "3px solid red";
  }
}
