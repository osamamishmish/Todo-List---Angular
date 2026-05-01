import { Component, inject, signal } from '@angular/core';
import { Styling } from '../../Services/styling';
import { Theme } from '../../Directives/theme';
import { ToggleCheck } from '../../Directives/toggle-check';

@Component({
  selector: 'app-all',
  imports: [ToggleCheck ,Theme],
  standalone:true,
  templateUrl: './all.html',
  styleUrl: './all.css',
})
export class All {
  todos=inject(Styling);
  allTodos=this.todos.all;
toggleChecked=this.todos.toggleChecking;
  toggleTodo(index:number){

      this.todos.all.update(all=>all.map((todo,i)=>i===index?{...todo,checked:!todo.checked}:todo));


  }

}
