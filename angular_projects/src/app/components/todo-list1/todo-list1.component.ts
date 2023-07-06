import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo, TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-list1',
  templateUrl: './todo-list1.component.html',
  styleUrls: ['./todo-list1.component.css']
})
export class TodoList1Component {
  todos: Observable<Todo[]> | undefined;
  constructor(private todoService: TodoService) {}
  ngOnInit(): void {
    this.todos = this.todoService.todoObs;
  }
  deleteTodo(id: number) {
    this.todoService.remove(id);
  }
}
