import { NgClass } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from "@angular/router";
import { Theme } from '../../theme';
import { Styling } from '../../styling';

@Component({
  selector: 'app-todo',
  imports: [RouterLink, RouterLinkActive, RouterOutlet , Theme],
  templateUrl: './todo.html',
  styleUrl: './todo.css',
})
export class Todo {
  isDark=inject(Styling);

  toggleMode(){
    this.isDark.isDark.set(!this.isDark.isDark());
    if(this.isDark.isDark()){
      document.body.classList.add('dark');
      document.body.classList.remove('light');

    }else{
            document.body.classList.add('light');
            document.body.classList.remove('dark');

    }
  }
}
