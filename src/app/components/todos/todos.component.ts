import { Component, OnInit } from '@angular/core';
import { Todo } from '../../../app/models/Todo';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todos: Todo[];

  constructor() {
    this.todos = [];
  }

  ngOnInit(): void {
    this.todos = [
      {
        id: 1,
        title: 'todo 1',
        completed: false,
      },
      {
        id: 2,
        title: 'todo 2',
        completed: true,
      },
      {
        id: 3,
        title: 'todo 3',
        completed: false,
      },
    ];
  }
}
