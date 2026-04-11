import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-todo',
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './todo.html',
  styleUrl: './todo.css',
})
export class Todo {

}
