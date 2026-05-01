import { NgClass } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from "@angular/router";
import { Theme } from '../../Directives/theme';
import { Styling } from '../../Services/styling';
import { ToggleCheck } from '../../Directives/toggle-check';

@Component({
  selector: 'app-todo',
  imports: [RouterLink, RouterLinkActive, RouterOutlet , Theme],
  templateUrl: './todo.html',
  styleUrl: './todo.css',
})
export class Todo {
  isDark=inject(Styling);
  // checking=inject(ToggleCheck);
  toggleTodo =this.isDark.toggleChecking;
  completedTodos(checked:boolean){

    if(checked){
this.toggleTodo.update(e=>!e);

  }else{
this.toggleTodo.update(e=>!e);
  }
}
  AddTodos(value:string){
    if(this.toggleTodo()){
      this.isDark.all.update(e=>[...e,{text:value,checked:true}]);

    }else{
       this.isDark.all.update(e=>[...e,{text:value,checked:false}]);

    }
  }
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

