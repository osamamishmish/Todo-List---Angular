import { Routes } from '@angular/router';
import { Todo } from './Components/todo/todo';
import { All } from './Components/all/all';
import { Active } from './Components/active/active';
import { Completed } from './Components/completed/completed';


export const routes: Routes = [

  { path: '', component: Todo },
  { path: 'All', component: All },
  {path:"Active", component:Active},
  {path:"Completed", component:Completed}

];
