import { Injectable } from '@nestjs/common';
import { Todo } from '@nxdevdemo/data';

@Injectable()
export class AppService {

  todos: Todo[] = [{ title: 'Todo 1' }, { title: 'Todo 2' }, { title: 'Todo 3' }, { title: 'Todo 4' }];

  getData(): Todo[] {
    return this.todos;;
  }
  addTodo() {
    this.todos.push({
      title: `New todo ${Math.floor(Math.random() * 1000)}`,
    });
    return this.todos;
  }
}
