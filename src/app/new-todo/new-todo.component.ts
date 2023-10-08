import { Component } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-new-todo',
  templateUrl: './new-todo.component.html',
  styleUrls: ['./new-todo.component.css'],
})
export class NewTodoComponent {
  constructor(private todoService: TodoService) { }

  addQuote(todo: string): void {
    this.todoService.addTodo(todo);
  }
}
