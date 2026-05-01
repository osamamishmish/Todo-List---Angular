import { Directive, ElementRef, inject, effect } from '@angular/core';
import { Styling } from '../Services/styling';

@Directive({
  selector: '[appTheme]',
  standalone: true
})
export class Theme {

  private el = inject(ElementRef);
  private theme = inject(Styling);

  constructor() {

    effect(() => {

      if (!this.theme.isDark()) {
        // Light mode
        this.el.nativeElement.style.backgroundColor = "hsl(236, 33%, 92%)";
        this.el.nativeElement.style.color = "hsl(235, 19%, 35%)";
      } else {
        // Dark mode
        this.el.nativeElement.style.backgroundColor = "hsl(235, 24%, 19%)";
        this.el.nativeElement.style.color = "hsl(234, 39%, 85%)";
      }

    });

  }
}
