import { Component, computed, effect, inject } from '@angular/core';
import { Theme } from '../../Directives/theme';
import { Styling } from '../../Services/styling';

@Component({
  selector: 'app-active',
  imports: [Theme],
  standalone:true,
  templateUrl: './active.html',
  styleUrl: './active.css',
})
export class Active {
  active = inject(Styling);
  activeTodos = computed(() =>
  this.active.all().filter(todo => !todo.checked)
);
   toggleTodo(index:number){

      this.active.all.update(all=>all.map((todo,i)=>i===index?{...todo,checked:!todo.checked}:todo));


  }
  deleteActive(index:number){
    this.active.all.update(all=>all.filter((_, i)=>i!==index));
  }
  constructor(){
    effect(()=>{
    this.active.count.set(this.activeTodos().length);
    });
  }
}
