import { Injectable } from '@angular/core';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  public todos: Todo[] = [];

  constructor() {
    fetch('https://dummyjson.com/todos')
      .then((res) => res.json())
      .then((res) => (this.todos = res.todos));
  }

  public addTodo(todo: string): void {
    this.todos.push({ todo, completed: false });
  }

  public removeTodo(todo: string): void {
    let index = this.todos.findIndex((all) => all.todo === todo);
    if (index === -1) {
      return;
    }

    this.todos.splice(index, 1);
  }
}
