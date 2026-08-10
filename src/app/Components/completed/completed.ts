import { Component, computed, inject } from '@angular/core';
import { Theme } from '../../Directives/theme';
import { Styling } from '../../Services/styling';

@Component({
  selector: 'app-completed',
  imports: [Theme],
  templateUrl: './completed.html',
  styleUrl: './completed.css',
})
export class Completed {
  completed =inject(Styling);
  completedTodos=computed(()=>{
    return this.completed.all().filter(todo=>todo.checked);
  })
  toggleTodo(index:number){
      this.completed.all.update(all=>all.map((todo,i)=>i===index?{...todo,checked:!todo.checked}:todo));

  }
  deleteCompleted(index:number){
    this.completed.all.update(all=>all.filter((_, i)=>i!==index));
  }

}
