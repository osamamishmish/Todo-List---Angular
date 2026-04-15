import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Styling {
  isDark =signal(true);
}
