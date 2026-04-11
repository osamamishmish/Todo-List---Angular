import { Routes } from '@angular/router';
import { Todo } from './Components/todo/todo';
import { All } from './Components/all/all';
import { Active } from './Components/active/active';
import { Completed } from './Components/completed/completed';


export const routes: Routes = [

  {
    path: '',
    component: Todo,
    children: [
      { path: 'all', component: All },
      { path: 'active', component: Active },
      { path: 'completed', component: Completed},
      { path: '', redirectTo: 'all', pathMatch: 'full' }
    ]
  }

];
