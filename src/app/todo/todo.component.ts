import { Component, Input } from '@angular/core';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent {
  @Input() todo: Todo = {} as Todo;

  constructor(private todoService: TodoService) { }

  remove(): void {
    this.todoService.removeTodo(this.todo.todo);
  }

  toggle(): void {
    this.todo.completed = !this.todo.completed;
  }
}
