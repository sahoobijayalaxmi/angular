import { Component } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {
  constructor(private todoService: TodoService) {}
  ngOnInit(): void {}
  addNewTodo(todoText: string) {
    this.todoService.create({ id: 3, value: todoText });
  }
}
