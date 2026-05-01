import { Styling } from '../Services/styling';
// import { ToggleCheck } from './toggle-check';
import { Directive, effect, inject, ElementRef, input } from '@angular/core';

@Directive({
  selector: '[appToggleCheck]',
  standalone: true
})
export class ToggleCheck {
   check=inject(Styling);
  el=inject(ElementRef);
  ToggleCheck=this.check.toggleChecking;
  constructor() {
    effect(()=>{
       if(this.el.nativeElement.checked ){
        this.el.nativeElement.style.textDecoration='line-through';

      }else{
        this.el.nativeElement.style.textDecoration='none';

      }
      // this.check.all().filter(e=>e.text===this.el.nativeElement.textContent&&e.checked)? this.el.nativeElement.style.textDecoration='line-through':this.el.nativeElement.style.textDecoration='none';
    })
  }

}
